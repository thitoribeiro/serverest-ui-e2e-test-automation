# serverest-ui-e2e-test-automation

Automação de testes E2E para ServeRest UI utilizando Cypress.

## 📋 Pré-requisitos

- Node.js (versão 18 ou superior)
- npm ou yarn

## 🚀 Instalação

```bash
npm install
```

## ⚙️ Configuração

Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:

```env
CYPRESS_LOGIN_EMAIL=seu-email@exemplo.com
CYPRESS_LOGIN_PASSWORD=sua-senha
CYPRESS_LOGIN_NAME=Seu Nome (opcional)
```

## 🧪 Executando os Testes

### Executar Todos os Testes

```bash
# Executa todos os testes no browser padrão (Electron)
npm test
# ou
npm run test:all
```

### Executar Testes Individuais

```bash
# Executa apenas o teste de cadastro
npm run test:cadastro

# Executa apenas o teste de login
npm run test:login
```

### Executar em Browsers Específicos

```bash
# Executa todos os testes no Chrome
npm run test:chrome

# Executa todos os testes no Firefox
npm run test:firefox

# Executa todos os testes no Electron
npm run test:electron
```

### Executar Teste Específico em Browser Específico

```bash
# Cadastro no Chrome
npm run test:cadastro:chrome

# Cadastro no Firefox
npm run test:cadastro:firefox

# Cadastro no Electron
npm run test:cadastro:electron

# Login no Chrome
npm run test:login:chrome

# Login no Firefox
npm run test:login:firefox

# Login no Electron
npm run test:login:electron
```

### Executar em Todos os Browsers

```bash
# Executa todos os testes em todos os browsers (sequencial)
npm run test:all:browsers

# Executa teste de cadastro em todos os browsers
npm run test:cadastro:all:browsers

# Executa teste de login em todos os browsers
npm run test:login:all:browsers
```

### Visualizar Testes no Browser (Headed Mode)

```bash
# Executa todos os testes com browser visível
npm run test:headed

# Executa teste de cadastro com browser visível
npm run test:cadastro:headed

# Executa teste de login com browser visível
npm run test:login:headed

# Executa teste de cadastro no Chrome (visível)
npm run test:cadastro:chrome:headed

# Executa teste de cadastro no Firefox (visível)
npm run test:cadastro:firefox:headed

# Executa teste de login no Chrome (visível)
npm run test:login:chrome:headed

# Executa teste de login no Firefox (visível)
npm run test:login:firefox:headed
```

> **Nota**: O modo `--headed` abre o browser visível, permitindo acompanhar a execução dos testes em tempo real. Útil para debug e validação visual.

### Modo Interativo (Cypress UI)

```bash
# Abre a interface gráfica do Cypress (escolha qual teste executar)
npm run cy:open

# Abre e executa apenas o teste de cadastro (visualizando)
npm run cy:open:cadastro

# Abre e executa apenas o teste de login (visualizando)
npm run cy:open:login
```

> **Nota**: O modo interativo (`cy:open`) abre a interface completa do Cypress onde você pode selecionar testes, ver logs detalhados e fazer debug passo a passo.

## 📝 Estrutura do Projeto

```
cypress/
├── e2e/
│   ├── cadastro.cy.js      # Testes de cadastro de usuário
│   └── login.cy.js         # Testes de login
├── fixtures/
│   ├── messages.json       # Mensagens de validação
│   └── testData.json       # Dados de teste
├── support/
│   ├── commands.js         # Comandos customizados
│   ├── elements/           # Mapeamento de elementos
│   │   ├── cadastroElements.js
│   │   ├── loginElements.js
│   │   └── homeElements.js
│   └── utils/              # Utilitários
│       └── userPayload.js
└── screenshots/            # Screenshots de falhas (gitignored)
└── videos/                 # Vídeos de falhas (gitignored)
```

## 🎯 Comandos Disponíveis

| Comando | Descrição |
|---------|-----------|
| `npm test` | Executa todos os testes (Electron) |
| `npm run test:all` | Executa todos os testes (Electron) |
| `npm run test:cadastro` | Executa apenas testes de cadastro |
| `npm run test:login` | Executa apenas testes de login |
| `npm run test:chrome` | Executa todos os testes no Chrome |
| `npm run test:firefox` | Executa todos os testes no Firefox |
| `npm run test:electron` | Executa todos os testes no Electron |
| `npm run test:cadastro:chrome` | Cadastro no Chrome |
| `npm run test:cadastro:firefox` | Cadastro no Firefox |
| `npm run test:cadastro:electron` | Cadastro no Electron |
| `npm run test:login:chrome` | Login no Chrome |
| `npm run test:login:firefox` | Login no Firefox |
| `npm run test:login:electron` | Login no Electron |
| `npm run test:all:browsers` | Todos os testes em todos os browsers |
| `npm run test:cadastro:all:browsers` | Cadastro em todos os browsers |
| `npm run test:login:all:browsers` | Login em todos os browsers |
| `npm run test:headed` | Executa todos os testes com browser visível |
| `npm run test:cadastro:headed` | Executa teste de cadastro com browser visível |
| `npm run test:login:headed` | Executa teste de login com browser visível |
| `npm run test:cadastro:chrome:headed` | Cadastro no Chrome (browser visível) |
| `npm run test:cadastro:firefox:headed` | Cadastro no Firefox (browser visível) |
| `npm run test:login:chrome:headed` | Login no Chrome (browser visível) |
| `npm run test:login:firefox:headed` | Login no Firefox (browser visível) |
| `npm run cy:open` | Abre interface gráfica do Cypress (modo interativo) |
| `npm run cy:open:cadastro` | Abre e executa teste de cadastro (modo interativo) |
| `npm run cy:open:login` | Abre e executa teste de login (modo interativo) |

## 📊 Relatórios

- **Screenshots**: Gerados automaticamente em `cypress/screenshots/` quando há falhas
- **Vídeos**: Gerados automaticamente em `cypress/videos/` apenas para testes que falharam (vídeos de sucesso são deletados automaticamente)

## 🌐 Browsers Suportados

O projeto está configurado para executar testes nos seguintes browsers:
- **Chrome**: Suporte completo
- **Firefox**: Suporte completo
- **Electron**: Browser padrão, incluído no Cypress

## 🔧 Tecnologias

- **Cypress**: Framework de automação E2E
- **Node.js**: Runtime JavaScript
- **dotenv**: Gerenciamento de variáveis de ambiente

## 📄 Licença

ISC
