# Intelli Mail - Análise Inteligente de Emails

## 📧 Descrição

O **Intelli Mail** é uma aplicação web moderna desenvolvida para análise inteligente de emails utilizando Inteligência Artificial. A aplicação permite que os usuários analisem o conteúdo de seus emails e recebam insights automatizados, sugestões de resposta e avaliações de produtividade.

## ✨ Funcionalidades Principais

- **Análise de Emails**: Processamento inteligente do conteúdo de emails
- **Insights Automatizados**: Geração automática de insights e sugestões
- **Sugestões de Resposta**: Recomendações inteligentes para respostas
- **Avaliação de Produtividade**: Análise da eficiência e produtividade dos emails
- **Interface Responsiva**: Design adaptável para diferentes dispositivos

## 🚀 Tecnologias Utilizadas

### Frontend Framework
- **Vue.js 2.6.14** - Framework progressivo para construção de interfaces
- **TypeScript 4.4** - Superset JavaScript com tipagem estática
- **Vue CLI 5.0** - Ferramenta de desenvolvimento oficial do Vue.js

### UI Framework & Estilização
- **Vuetify 2.5.8** - Framework de componentes Material Design para Vue.js
- **Sass/SCSS** - Pré-processador CSS com variáveis e mixins
- **Stylus** - Pré-processador CSS alternativo

### Gerenciamento de Estado
- **Vuex 3.6.2** - Gerenciamento de estado centralizado
- **Vuex-Class** - Decorators para integração TypeScript com Vuex

### Roteamento
- **Vue Router 3.5.2** - Roteamento oficial do Vue.js

### Requisições HTTP
- **Axios 1.11.0** - Cliente HTTP baseado em Promises

### Desenvolvimento & Build
- **Webpack** - Bundler de módulos (configurado via Vue CLI)
- **Babel** - Transpilador JavaScript
- **ESLint** - Linter para JavaScript/TypeScript
- **Fork TS Checker** - Verificação de tipos TypeScript em paralelo
## 🏗️ Arquitetura do Projeto

```
src/
├── components/          # Componentes reutilizáveis
│   ├── inputs/         # Componentes de entrada
│   └── layout/         # Componentes de layout
│       ├── sections/   # Seções da aplicação
│       └── loading/    # Componentes de carregamento
├── views/              # Páginas/views da aplicação
├── routes/             # Configuração de rotas
├── plugins/            # Plugins Vue (router, store, vuetify)
├── store/              # Gerenciamento de estado (Vuex)
├── types/              # Definições de tipos TypeScript
├── middlewares/        # Middlewares da aplicação
├── mixins/             # Mixins Vue
└── styles/             # Estilos globais
```

## 🛠️ Configuração do Ambiente

### Pré-requisitos
- **Node.js** 18.x ou superior
- **npm** 6.x ou superior
- **Git** para controle de versão

### Instalação

1. **Clone o repositório**
   ```bash
   git clone git@github.com:JoaoVitorLiberato/challeng-auto-u-digital.git
   cd frontend
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```

3. **Configure variáveis de ambiente**
   ```bash
   # Crie um arquivo .env.local na raiz do projeto
   cp .env.example .env.local
   ```

4. **Execute em modo de desenvolvimento**
   ```bash
   npm run serve
   ```

4.5. **Adicione as variáveis ambiente**
   ```bash
   VUE_APP_SERVICE_API_URL = https://challeng-auto-u-digital-production.up.railway.app/
   VUE_APP_SERVICE_API_KEY = 64315e7f4739f421ffd64bfe3d0eddc8
   ```

5. **Acesse a aplicação**
   ```
   http://localhost:8080
   ```

## 📜 Scripts Disponíveis

```bash
# Desenvolvimento
npm run serve          # Inicia servidor de desenvolvimento

# Build
npm run build          # Gera build de produção

# Qualidade de código
npm run lint           # Executa linting e correções automáticas
```

## 🔧 Configurações

### TypeScript
- Configuração estrita habilitada
- Suporte a decorators experimentais
- Path mapping configurado (`@/*` → `src/*`)
- Verificação de tipos em paralelo com Fork TS Checker

### Vue.js
- Modo de produção otimizado
- Configuração de páginas personalizada
- Título e meta tags configurados


## 🎨 Design System

A aplicação utiliza o **Material Design** através do Vuetify, oferecendo:
- Componentes consistentes e acessíveis
- Sistema de cores e tipografia padronizado
- Layout responsivo e adaptável
- Animações e transições suaves

## 📱 Responsividade

- **Mobile First**: Design otimizado para dispositivos móveis
- **Breakpoints**: Sistema de breakpoints do Vuetify
- **Grid System**: Layout flexível e adaptável
- **Touch Friendly**: Interface otimizada para toque


## 🚀 Deploy

### Build de Produção
```bash
npm run build
```

### Estrutura de Deploy
```
dist/
├── index.html          # Página principal
├── css/               # Estilos otimizados
├── js/                # JavaScript otimizado
└── assets/            # Assets estáticos
```