# Auto U Digital - Sistema de Classificação de Emails Corporativos

## 🛠️ Configuração e Instalação

### 1. Pré-requisitos
- Python 3.8+
- pip
- Variável de ambiente `OPENAI_API_KEY`

### 2. Instalação
```bash
# Clone o repositório
git clone <repository-url>
cd backend

# Crie e ative o ambiente virtual
python -m venv venv
source venv/bin/activate  # Linux/Mac
# ou
venv\Scripts\activate     # Windows

# Instale as dependências
pip install -r requirements.txt

# Configure as variáveis de ambiente
cp .env.example .env

# Edite o arquivo .env com sua OPENAI_API_KEY ou use
OPENAI_API_KEY=
API_KEY=64315e7f4739f421ffd64bfe3d0eddc8
```

### 3. Execução
```bash
# Desenvolvimento
python src/presentation/app.py

# Produção
gunicorn -w 4 -b 0.0.0.0:5000 src.presentation.app:app
```

## 📋 Descrição

O **Auto U Digital** é uma aplicação backend inteligente que classifica automaticamente emails corporativos como **Produtivos** ou **Improdutivos**, além de gerar respostas sugeridas baseadas na classificação. O sistema utiliza inteligência artificial para analisar o conteúdo dos emails e determinar sua relevância para o ambiente de trabalho.

## 🏗️ Arquitetura

A aplicação segue os princípios da **Arquitetura Limpa (Clean Architecture)** com separação clara de responsabilidades:

```
src/
├── domain/           # Camada de domínio (entidades e regras de negócio)
├── application/      # Camada de aplicação (casos de uso)
├── infrastructure/   # Camada de infraestrutura (adaptadores externos)
├── presentation/     # Camada de apresentação (controllers e rotas)
└── shared/          # Utilitários compartilhados
```

### Estrutura das Camadas:

- **Domain Layer**: Contém a entidade `Email` com as propriedades básicas
- **Application Layer**: Implementa o caso de uso `ClassifyEmailUseCase`
- **Infrastructure Layer**: Gerencia o serviço de IA e adaptadores externos
- **Presentation Layer**: Controla as rotas HTTP e validações de entrada

## 🚀 Tecnologias Utilizadas

### Backend Framework
- **Flask**: Framework web Python para criação da API REST
- **Flask-CORS**: Suporte a Cross-Origin Resource Sharing
- **Gunicorn**: Servidor WSGI para produção

### Inteligência Artificial
- **OpenAI GPT-4o-mini**: Modelo principal para classificação e geração de respostas
- **Transformers (Hugging Face)**: Modelo local GPT-2 em português como fallback
- **scikit-learn**: Pipeline de ML local com TF-IDF + Regressão Logística
- **NLTK**: Processamento de linguagem natural e stopwords em português

### Processamento de Dados
- **PyPDF2**: Leitura e processamento de arquivos PDF
- **python-dotenv**: Gerenciamento de variáveis de ambiente

## 🤖 Sistema de IA e Método de Treinamento

### 1. Classificação Híbrida

O sistema utiliza uma abordagem híbrida para classificação de emails:

#### **Classificação GPT (Primária)**
- Utiliza OpenAI GPT-4o-mini para análise semântica avançada
- Prompt estruturado para classificação binária (Produtivo/Improdutivo)
- Fallback automático para classificação local em caso de rate limiting

#### **Classificação Local (Fallback)**
- Pipeline de ML local com TF-IDF + Regressão Logística
- Treinado com dataset customizado em português
- Resposta rápida sem dependência de APIs externas

### 2. Dataset de Treinamento

O modelo local é treinado com dados customizados localizados em `public/data/training_data.txt`:

- **Formato**: `texto;classificação`
- **Classes**: `Produtivo` e `Improdutivo`
- **Exemplos**:
  - "Revisei conteúdo de treinamento interno;Produtivo"
  - "Assisti vídeos engraçados no YouTube;Improdutivo"
  - "Planejei orçamento mensal;Produtivo"

### 3. Pipeline de ML Local

```python
self.classifier = Pipeline([
    ("tfidf", TfidfVectorizer(lowercase=True, stop_words=stopwords_pt)),
    ("clf", LogisticRegression())
])
```

- **TF-IDF**: Vetorização de texto com remoção de stopwords em português
- **Regressão Logística**: Classificador binário treinado com dados customizados
- **Stopwords**: Remoção de palavras comuns em português para melhor foco no conteúdo

### 4. Geração de Respostas

O sistema gera respostas contextualizadas baseadas na classificação:

- **GPT-4o-mini**: Geração de respostas naturais e contextuais
- **GPT-2 Local**: Fallback para geração local em português
- **Parâmetros de Geração**:
  - `max_new_tokens`: 60
  - `temperature`: 0.7 (criatividade balanceada)
  - `top_k`: 50, `top_p`: 0.9 (diversidade controlada)
  - `repetition_penalty`: 2.0 (evita repetições)

## 🔌 API Endpoints

### POST `/process`

Processa e classifica emails corporativos.

**Entrada:**
```json
{
  "email_text": "Conteúdo do email aqui"
}
```

**Resposta:**
```json
{
  "result": {
    "raw_text": "Conteúdo do email aqui",
    "category": "Produtivo",
    "suggested_response": "Resposta sugerida gerada pela IA"
  },
  "email_text": "Conteúdo do email aqui"
}
```

## 🔒 Segurança

- **API Key Middleware**: Validação obrigatória de chave de API para todas as requisições
- **CORS**: Configurado para permitir requisições cross-origin
- **Validação de Entrada**: Verificação de conteúdo vazio e tipos de arquivo suportados

