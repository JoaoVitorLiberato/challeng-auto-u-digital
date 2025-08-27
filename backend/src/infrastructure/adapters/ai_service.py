import os
from dotenv import load_dotenv
from openai import OpenAI, RateLimitError
from transformers import pipeline

# Para TF-IDF e Logistic Regression
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.linear_model import LogisticRegression
from sklearn.pipeline import Pipeline

load_dotenv()

class AIService:
  def __init__(self):
    api_key = os.getenv("OPENAI_API_KEY")
    if not api_key:
      raise ValueError("OPENAI_API_KEY não encontrado. Configure no .env ou nas variáveis de ambiente.")
    self.client = OpenAI(api_key=api_key)

    # Modelo local para fallback
    self.local_generator = pipeline(
        "text-generation",
        model="pierreguillou/gpt2-small-portuguese",
        tokenizer="pierreguillou/gpt2-small-portuguese",
        device=-1
    )

    texts = [
      "Tenho uma reunião importante hoje",
      "Fui ao cinema",
      "Recebi confirmação do pagamento",
      "Assisti séries a tarde",
      "Enviei o contrato para o cliente",
      "Jogue no tigrinho"
    ]

    labels = ["Produtivo", "Improdutivo", "Produtivo", "Improdutivo", "Produtivo", "Improdutivo"]

    self.classifier = Pipeline([
      ("tfidf", TfidfVectorizer()),
      ("clf", LogisticRegression())
    ])

    self.classifier.fit(texts, labels)

  def classify(self, text: str) -> str:
    return self.classifier.predict([text])[0]

  def generate_response(self, text: str, category: str) -> str:
    if category == "Produtivo":
      prompt = f"Email: {text}\nGere uma resposta profissional e curta confirmando o recebimento."
    else:
      prompt = f"Email: {text}\nGere uma resposta educada e curta."

    try:
      response = self.client.chat.completions.create(
          model="gpt-4o-mini",
          messages=[
              {"role": "system", "content": "Você é um assistente que gera respostas curtas para emails."},
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
