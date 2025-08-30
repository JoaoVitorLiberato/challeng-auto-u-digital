import os
from dotenv import load_dotenv
from openai import OpenAI, RateLimitError
from transformers import pipeline

from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.linear_model import LogisticRegression
from sklearn.pipeline import Pipeline

from nltk.corpus import stopwords
import nltk

nltk.download('popular')

load_dotenv()

class AIService:
  def __init__(self):
    api_key = os.getenv("OPENAI_API_KEY")

    if not api_key:
      raise ValueError("OPENAI_API_KEY não encontrado. Configure no .env ou nas variáveis de ambiente.")
    self.client = OpenAI(api_key=api_key)

    self.local_generator = pipeline(
      "text-generation",
      model="pierreguillou/gpt2-small-portuguese",
      tokenizer="pierreguillou/gpt2-small-portuguese",
      device=-1
    )

    stopwords_pt = stopwords.words('portuguese')
    self.classifier = Pipeline([
      ("tfidf", TfidfVectorizer(lowercase=True, stop_words=stopwords_pt)),
      ("clf", LogisticRegression())
    ])

    texts, labels = self._loading_traning_data("training_data.txt")
    self.classifier.fit(texts, labels)

  def _loading_traning_data(self, file_name):
    base_dir = os.path.dirname(
      os.path.dirname(
        os.path.dirname(
          os.path.dirname(os.path.abspath(__file__))
        )
      )
    )
    file_path = os.path.join(base_dir, "public", "data", file_name)

    texts, labels = [], []

    with open(file_path, "r", encoding="utf-8") as f:
      for line in f:
        line = line.strip()
        if not line or ";" not in line:
          continue
        text, label = line.split(";", 1)
        texts.append(text.strip())
        labels.append(label.strip())
    return texts, labels

  def classify_local(self, text: str) -> str:
    return self.classifier.predict([text])[0]
  
  def classify_gpt(self, text: str):
    prompt = f"""
      Você é um classificador de emails corporativos.
      Analise o seguinte email:

      "{text}"

      Responda apenas com uma das opções abaixo:
      - Produtivo: quando o email tem relevância para o trabalho, andamento de requisições, envio de arquivos ou qualquer informação útil.
      - Improdutivo: quando o email não contribui para o trabalho (felicitações, mensagens pessoais, spam ou irrelevantes).

      Responda somente com uma palavra: 'Produtivo' ou 'Improdutivo'.
    """

    try:
      response = self.client.chat.completions.create(
        model="gpt-4o-mini",
        messages=[
          {"role": "system", "content": "Você é um assistente que classifica emails corporativos como Produtivo ou Improdutivo."},
          {"role": "user", "content": prompt}
        ],
        max_tokens=10
      )

      classification = response.choices[0].message.content.strip().lower()

      if classification.startswith("produtivo"):
        return "Produtivo"
      elif classification.startswith("improdutivo"):
        return "Improdutivo"
      else:
        return "Improdutivo"

    except RateLimitError:
      return self.classify_local(text)

  def generate_response(self, text: str) -> str:
    category = self.classify_gpt(text)

    prompt = f"Analise o email: {text} e gere uma resposta curta e adequada considerando que a situação é {category}."
    try:
      response = self.client.chat.completions.create(
        model="gpt-4o-mini",
        messages=[
          {"role": "system", "content": "Você é um assistente que gera respostas curtas para emails de acordo com o conteúdo."},
          {"role": "user", "content": prompt}
        ],
        max_tokens=100
      )
      return response.choices[0].message.content.strip()
    except RateLimitError:
      local_response = self.local_generator(
        prompt,
        max_new_tokens=60,
        do_sample=True,
        temperature=0.7,
        top_k=50, 
        top_p=0.9,
        repetition_penalty=2.0
      )
      return local_response[0]['generated_text'].replace(prompt, "").strip()
