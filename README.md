# 🚀 ServeRest UI Test Automation

[![Node.js](https://img.shields.io/badge/Node.js-18+-green.svg)](https://nodejs.org/)
[![Cypress](https://img.shields.io/badge/Cypress-13.7.0-blue.svg)](https://www.cypress.io/)
[![JavaScript](https://img.shields.io/badge/JavaScript-CommonJS-yellow.svg)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![License](https://img.shields.io/badge/License-ISC-blue.svg)](LICENSE)

Projeto de automação de testes de UI para o [ServeRest](https://front.serverest.dev) utilizando Cypress, seguindo as melhores práticas de engenharia de qualidade de software e Clean Code.

---

## 📋 Índice

- [Sobre o Projeto](#-sobre-o-projeto)
- [Objetivos](#-objetivos)
- [Ferramentas e Tecnologias](#-ferramentas-e-tecnologias)
- [Arquitetura e Estrutura](#-arquitetura-e-estrutura)
- [Melhores Práticas Implementadas](#-melhores-práticas-implementadas)
- [Pré-requisitos](#-pré-requisitos)
- [Instalação](#-instalação)
- [Configuração](#-configuração)
- [Executando os Testes](#-executando-os-testes)
- [Estrutura dos Testes](#-estrutura-dos-testes)
- [Relatórios](#-relatórios)
- [Padrões de Código](#-padrões-de-código)
- [Exemplos de Uso](#-exemplos-de-uso)

---

## 🎯 Sobre o Projeto

Este projeto implementa uma suíte completa de testes automatizados para a interface web do ServeRest, focando em:

- ✅ **Cobertura de funcionalidades**: Login, Cadastro público e Cadastro autenticado
- ✅ **Testes negativos e positivos**: Validação de casos de erro e sucesso
- ✅ **Seletores estáveis**: Priorização de `data-testid` e `id` para maior confiabilidade
- ✅ **Isolamento de dados**: Fixtures e geração dinâmica de dados únicos
- ✅ **Relatórios detalhados**: Allure Reports para análise e rastreabilidade
- ✅ **Multi-browser**: Suporte para Chrome, Firefox e Electron
- ✅ **Clean Code**: Código limpo, organizado e fácil de manter

---

## 🎯 Objetivos

### Principais

1. **Qualidade e Confiabilidade**: Garantir que a UI funcione conforme esperado através de testes automatizados
2. **Validação de Funcionalidades**: Testar fluxos completos de usuário (login, cadastro público e autenticado)
3. **Cobertura de Cenários**: Testar tanto casos de sucesso quanto casos de erro (negativos)
4. **Manutenibilidade**: Código limpo, organizado e fácil de manter seguindo Clean Code
5. **Rastreabilidade**: Relatórios detalhados para análise de resultados

### Técnicos

- Implementar padrão **Element Mapping + Custom Commands** para mapeamento de elementos e ações
- Centralizar helpers e comandos customizados
- Eliminar duplicação de código (princípio DRY)
- Priorizar seletores estáveis (`data-testid` e `id`)
- Garantir execução rápida e estável dos testes
- Facilitar onboarding de novos membros do time

---

## 🛠 Ferramentas e Tecnologias

### Core

| Ferramenta | Versão | Propósito |
|------------|--------|-----------|
| [Node.js](https://nodejs.org/) | ≥18 | Runtime JavaScript |
| [Cypress](https://www.cypress.io/) | 13.7.0 | Framework de automação de testes E2E |
| [JavaScript (CommonJS)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules) | ES6+ | Linguagem de programação |

### Relatórios e Plugins

| Ferramenta | Versão | Propósito |
|------------|--------|-----------|
| [Allure Report](https://docs.qameta.io/allure/) | 2.34.1 | Geração de relatórios detalhados |
| [@shelex/cypress-allure-plugin](https://github.com/Shelex/cypress-allure-plugin) | 2.41.2 | Integração Allure com Cypress |
| [dotenv](https://www.npmjs.com/package/dotenv) | 17.2.3 | Gerenciamento de variáveis de ambiente |

### Browsers Suportados

- **Chrome**: Suporte completo
- **Firefox**: Suporte completo
- **Electron**: Browser padrão, incluído no Cypress

---

## 📁 Arquitetura e Estrutura

### Estrutura de Diretórios

```
serverest-ui-e2e-test-automation/
│
├── cypress/                          # Diretório principal do Cypress
│   ├── e2e/                         # Testes end-to-end
│   │   ├── 1-cadastro.cy.js        # Testes de cadastro público
│   │   ├── 2-login.cy.js           # Testes de login
│   │   └── 3-cadastro-usuario-auth.cy.js  # Testes de cadastro autenticado
│   │
│   ├── fixtures/                    # Dados de teste
│   │   ├── messages.json           # Mensagens de validação
│   │   └── testData.json           # Dados de teste configuráveis
│   │
│   ├── support/                     # Helpers e configurações
│   │   ├── e2e/                    # Configuração do Cypress E2E
│   │   │   └── index.js            # Imports globais
│   │   ├── commands.js             # Comandos customizados ⭐
│   │   ├── elements/               # Element Mapping (mapeamento de elementos)
│   │   │   ├── cadastroElements.js
│   │   │   ├── loginElements.js
│   │   │   ├── homeElements.js
│   │   │   └── listUsersElements.js
│   │   └── utils/                  # Utilitários
│   │       └── userPayload.js      # Geração de dados de usuário
│   │
│   ├── screenshots/                 # Screenshots (apenas falhas)
│   └── videos/                      # Vídeos (apenas falhas)
│
├── allure-results/                  # Resultados brutos do Allure
├── allure-report/                   # Relatório HTML gerado
│
├── cypress.config.js                # Configuração do Cypress
├── package.json                     # Dependências e scripts npm
├── .env                             # Variáveis de ambiente (não versionado)
├── .gitignore                       # Arquivos ignorados pelo Git
└── README.md                        # Este arquivo
```

### Organização dos Testes

Os testes seguem uma nomenclatura numérica para garantir ordem de execução:

- `1-cadastro.cy.js` - Testes de cadastro público (sem login)
- `2-login.cy.js` - Testes de login
- `3-cadastro-usuario-auth.cy.js` - Testes de cadastro autenticado (com login)

### Fluxo de Execução

```
1. Configuração (carrega variáveis de ambiente)
   ↓
2. Execução dos testes (Cypress + Browser escolhido)
   ↓
3. Coleta de resultados (Allure)
   ↓
4. Geração do relatório HTML
   ↓
5. Abertura automática no navegador (se configurado)
```

---

## ✨ Melhores Práticas Implementadas

### 1. **Element Mapping + Custom Commands**

Adotamos uma abordagem híbrida que combina:

**Element Mapping**: Mapeamento centralizado de seletores em arquivos separados:

```javascript
// cypress/support/elements/cadastroElements.js
const TEST_IDS = Object.freeze({
  name: 'nome',
  email: 'email',
  password: 'password',
  // ...
});

const SELECTORS = Object.freeze({
  nome: `[data-testid="${TEST_IDS.name}"], #nome`,
  email: `[data-testid="${TEST_IDS.email}"], #email`,
  // ...
});

module.exports = SELECTORS;
```

**Custom Commands**: Ações encapsuladas em comandos reutilizáveis do Cypress:

```javascript
// cypress/support/commands.js
Cypress.Commands.add('preencherCadastro', (user) => {
  cy.get(elements.inputName).clear().type(user.name);
  cy.get(elements.inputEmail).clear().type(user.email);
  // ...
});

**Usado nos testes:**
```javascript
cy.preencherCadastro(user);
```

**Por que esta abordagem?**
- ✅ Mantém a simplicidade do Cypress
- ✅ Reutilização de código através de comandos customizados
- ✅ Seletores centralizados e fáceis de manter
- ✅ Evita complexidade desnecessária de classes/objetos

### 2. **Clean Code Principles**

- **Nomes descritivos**: Variáveis e funções com nomes claros
- **Imutabilidade**: Uso de `Object.freeze()` para seletores
- **Single Source of Truth**: Cada elemento mapeado uma única vez
- **DRY (Don't Repeat Yourself)**: Comandos customizados reutilizáveis

### 3. **Comandos Customizados**

Helpers centralizados em `cypress/support/commands.js`:

- ✅ `loginUI()` - Login automatizado (execução invisível)
- ✅ `visitCadastro()` - Navegação para página de cadastro
- ✅ `preencherCadastro()` - Preenchimento de formulário
- ✅ `submeterCadastro()` - Submissão de formulário
- ✅ `assertToast()` - Validação de mensagens toast
- ✅ `fecharToast()` - Fechamento de mensagens toast

### 4. **Seletores Estáveis**

Priorização de seletores para maior confiabilidade:

1. `data-testid` (prioritário)
2. `id` (fallback)
3. Classes CSS (evitar quando possível)

### 5. **Isolamento de Testes**

- Dados únicos usando `Date.now()` e `Math.random()`
- Fixtures para dados estáticos e mensagens
- Geração dinâmica de emails únicos

### 6. **Nomenclatura Descritiva**

- Testes com títulos claros e descritivos
- Padrão: "Tentativa de [ação] com [condição]"
- Códigos de teste (CT-XXX) para rastreabilidade

### 7. **Configuração Centralizada**

- Variáveis de ambiente via `.env`
- Configuração do Cypress em `cypress.config.js`
- Base URL configurável
- Timeouts e viewport configuráveis

### 8. **Segurança**

- Credenciais via variáveis de ambiente
- Nenhuma credencial hardcoded
- Arquivo `.env` no `.gitignore`

---

## 📦 Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- **Node.js** ≥ 18.x ([Download](https://nodejs.org/))
- **npm** (incluído com Node.js) ou **yarn**
- **Git** ([Download](https://git-scm.com/))

### Verificar instalações

```bash
node --version  # Deve retornar v18.x ou superior
npm --version   # Deve retornar 9.x ou superior
git --version   # Qualquer versão recente
```

---

## 📥 Instalação

### 1. Clone o repositório

```bash
git clone https://github.com/thitoribeiro/serverest-ui-e2e-test-automation.git
cd serverest-ui-e2e-test-automation
```

### 2. Instale as dependências

```bash
npm install
```

Isso instalará todas as dependências listadas no `package.json`:

- Cypress
- Allure plugins
- dotenv
- Outras dependências de desenvolvimento

### 3. Verifique a instalação

```bash
npx cypress verify
```

Você deve ver uma mensagem de sucesso confirmando que o Cypress está instalado corretamente.

---

## ⚙️ Configuração

### Variáveis de Ambiente

1. Crie um arquivo `.env` na raiz do projeto:

```bash
touch .env
```

2. Edite o arquivo `.env` com suas configurações:

```env
# Credenciais para login (obrigatório para testes autenticados)
CYPRESS_LOGIN_EMAIL=seu-email@exemplo.com
CYPRESS_LOGIN_PASSWORD=sua-senha
CYPRESS_LOGIN_NAME=Seu Nome (opcional)
```

**Nota**: O arquivo `.env` não é versionado (está no `.gitignore`) para proteger informações sensíveis.

### Configuração do Cypress

O arquivo `cypress.config.js` já está configurado com:

- ✅ Base URL: `https://front.serverest.dev`
- ✅ Viewport: 1366x768
- ✅ Screenshots apenas em falhas
- ✅ Vídeos apenas em falhas (vídeos de sucesso são deletados automaticamente)
- ✅ Timeout padrão: 8000ms
- ✅ Integração com Allure Reports
- ✅ Carregamento automático de variáveis de ambiente

---

## 🚀 Executando os Testes

### Scripts Disponíveis

#### Executar testes individuais

Cada script executa um spec específico e **automaticamente gera e abre o relatório Allure**:

```bash
# Teste de cadastro público
npm run test:cadastro

# Teste de login
npm run test:login

# Teste de cadastro autenticado
npm run test:cadastro-auth
```

#### Executar todos os testes

```bash
# Executa todos os specs na ordem numérica
npm run test:all

# Executa todos os specs sequencialmente
npm run test:all:specs
```

**Ordem de execução:**

1. `1-cadastro.cy.js` (4 testes)
2. `2-login.cy.js` (6 testes)
3. `3-cadastro-usuario-auth.cy.js` (5 testes)

**Total: 15 testes**

#### Executar em browsers específicos

```bash
# Chrome
npm run test:chrome

# Firefox
npm run test:firefox

# Electron (padrão)
npm run test:electron
```

#### Executar todos os testes em todos os browsers

```bash
# Headless (sem interface visual)
npm run test:all:browsers

# Headed (com interface visual) ⭐ Recomendado
npm run test:all:browsers:headed
```

#### Visualizar testes durante execução (Headed Mode)

```bash
# Todos os testes com browser visível
npm run test:headed

# Teste específico com browser visível
npm run test:cadastro:headed
npm run test:login:headed
npm run test:cadastro-auth:headed

# Chrome com browser visível
npm run test:chrome:headed

# Todos os testes em todos os browsers (headed)
npm run test:all:browsers:headed
```

#### Modo Interativo (Cypress UI)

Para debug e desenvolvimento:

```bash
# Abre interface gráfica do Cypress
npm run cy:open

# Abre teste específico na interface
npm run cy:open:cadastro
npm run cy:open:login
npm run cy:open:cadastro-auth
```

> **Nota**: O modo interativo (`cy:open`) abre a interface completa do Cypress onde você pode selecionar testes, ver logs detalhados e fazer debug passo a passo.

---

## 📊 Estrutura dos Testes

### Cobertura Atual

| Spec | Funcionalidade | Testes Positivos | Testes Negativos | Total |
|------|----------------|------------------|------------------|-------|
| `1-cadastro.cy.js` | Cadastro público | 1 | 3 | 4 |
| `2-login.cy.js` | Login | 1 | 5 | 6 |
| `3-cadastro-usuario-auth.cy.js` | Cadastro autenticado | 1 | 4 | 5 |
| **TOTAL** | - | **3** | **12** | **15** |

### Cenários de Teste

#### 1. Cadastro Público (`1-cadastro.cy.js`)

**Negativos:**
- ✅ Tentativa de cadastro com campos vazios
- ✅ Tentativa de cadastro com e-mail inválido
- ✅ Tentativa de cadastro com formulário vazio

**Positivos:**
- ✅ Cadastro de usuário com sucesso

#### 2. Login (`2-login.cy.js`)

**Negativos:**
- ✅ Tentativa de login com campos vazios
- ✅ Tentativa de login apenas com senha preenchida
- ✅ Tentativa de login apenas com e-mail preenchido
- ✅ Tentativa de login com e-mail inválido
- ✅ Tentativa de login com credenciais inválidas

**Positivos:**
- ✅ Login com credenciais válidas

#### 3. Cadastro Autenticado (`3-cadastro-usuario-auth.cy.js`)

**Negativos:**
- ✅ CT-001: Tentativa de cadastro com campos vazios
- ✅ CT-002: Tentativa de cadastro apenas com nome preenchido
- ✅ CT-003: Tentativa de cadastro com e-mail inválido
- ✅ CT-004: Tentativa de cadastro com e-mail já cadastrado

**Positivos:**
- ✅ CT-005: Cadastro de usuário com sucesso

---

## 📈 Relatórios

### Allure Reports

Após cada execução, o relatório Allure é gerado e aberto automaticamente no navegador.

#### O que você encontra no relatório:

- 📊 **Dashboard**: Visão geral dos testes executados
- ✅ **Resultados detalhados**: Status de cada teste
- ⏱️ **Métricas de tempo**: Duração de execução
- 📝 **Logs**: Logs detalhados de cada passo
- 📸 **Evidências**: Screenshots e dados capturados
- 📉 **Tendências**: Histórico de execuções
- 🌐 **Suporte multi-browser**: Resultados por browser

#### Acessar relatório manualmente

Se necessário, você pode gerar ou abrir o relatório manualmente:

```bash
# Gerar relatório
npm run allure:generate

# Abrir relatório no navegador
npm run allure:open

# Servir relatório temporariamente (gera e abre automaticamente)
npm run allure:serve
```

**Localização**: `allure-report/index.html`

### Screenshots e Vídeos

- **Screenshots**: Gerados automaticamente em `cypress/screenshots/` apenas quando há falhas
- **Vídeos**: Gerados automaticamente em `cypress/videos/` apenas quando há falhas (vídeos de sucesso são deletados automaticamente)

---

## 📝 Padrões de Código

### Convenções de Nomenclatura

- **Arquivos de teste**: `{numero}-{funcionalidade}.cy.js`
- **Arquivos de elementos**: `{pagina}Elements.js`
- **Funções helper**: `camelCase` (ex: `loginUI`, `preencherCadastro`)
- **Constantes**: `UPPER_SNAKE_CASE` ou `Object.freeze()`
- **Variáveis**: `camelCase`

### Estrutura de um Teste

```javascript
// 1. Imports
const messages = require('../fixtures/messages.json');
const elements = require('../support/elements/cadastroElements');
const { buildUser } = require('../support/utils/userPayload');

// 2. Setup do describe
describe('Cadastro de Usuário', () => {
  beforeEach(() => {
    cy.visitCadastro();
  });

  // 3. Testes negativos primeiro
  it('Tentativa de cadastro com campos vazios', () => {
    cy.get(elements.submitButton).click();
    cy.get(elements.alertMessage).should('be.visible');
    cy.contains(messages.requiredName).should('exist');
  });

  // 4. Testes positivos depois
  it('Cadastro de usuário com sucesso', () => {
    const user = buildUser();
    cy.preencherCadastro(user);
    cy.submeterCadastro();
    cy.assertToast(messages.successRegister);
  });
});
```

### Comandos Customizados

Todos os comandos customizados estão em `cypress/support/commands.js` e são carregados automaticamente:

```javascript
// Exemplo de uso
cy.loginUI();                    // Faz login (invisível)
cy.visitCadastro();              // Navega para cadastro
cy.preencherCadastro(user);      // Preenche formulário
cy.submeterCadastro();           // Submete formulário
cy.assertToast('mensagem');      // Valida toast
cy.fecharToast();                // Fecha toast
```

---

## 💡 Exemplos de Uso

### Executando um teste específico durante desenvolvimento

```bash
# Abrir Cypress GUI
npm run cy:open

# Selecionar o spec desejado e executar em modo interativo
```

### Executando todos os testes em modo visual

```bash
# Executa todos os testes em todos os browsers com interface visual
npm run test:all:browsers:headed
```

### Verificando resultados após execução

Após executar qualquer script de teste, o relatório Allure será aberto automaticamente. Você pode:

- Analisar testes falhados
- Ver detalhes de cada passo
- Exportar relatórios em diferentes formatos
- Compartilhar resultados com a equipe
- Ver tendências históricas

---

## 🧪 Comandos Customizados Disponíveis

### `loginUI()`

Faz login automatizado usando credenciais do `.env`:

```javascript
// Uso no beforeEach de testes autenticados
beforeEach(() => {
  cy.loginUI();
  // Navegar para a funcionalidade desejada
});
```

**Características:**
- Execução invisível (sem logs no console)
- Validação automática de redirecionamento
- Requer `LOGIN_EMAIL` e `LOGIN_PASSWORD` no `.env`

### `visitCadastro()`

Navega para a página de cadastro público:

```javascript
cy.visitCadastro();
```

### `preencherCadastro(user)`

Preenche o formulário de cadastro com dados do usuário:

```javascript
const user = buildUser();
cy.preencherCadastro(user);
```

**Parâmetros:**
- `user`: Objeto com `name`, `email`, `password`, `admin` (opcional)

### `submeterCadastro()`

Submete o formulário de cadastro:

```javascript
cy.submeterCadastro();
```

### `assertToast(text)`

Valida se uma mensagem toast está visível:

```javascript
cy.assertToast('Cadastro realizado com sucesso');
```

### `fecharToast()`

Fecha uma mensagem toast:

```javascript
cy.fecharToast();
```

---

## 🔧 Troubleshooting

### Problema: Testes falhando com timeout

**Solução**: Verifique se a aplicação está acessível:

```bash
curl https://front.serverest.dev
```

### Problema: Allure não abre automaticamente

**Solução**: Abra manualmente:

```bash
npm run allure:open
```

### Problema: Erro ao instalar dependências

**Solução**: Limpe o cache e reinstale:

```bash
rm -rf node_modules package-lock.json
npm install
```

### Problema: Variáveis de ambiente não carregadas

**Solução**: Verifique se o arquivo `.env` existe e está na raiz do projeto:

```bash
cat .env
```

Certifique-se de que as variáveis estão corretas:
- `CYPRESS_LOGIN_EMAIL`
- `CYPRESS_LOGIN_PASSWORD`

### Problema: Browser não encontrado

**Solução**: Certifique-se de que o browser está instalado:

```bash
# Verificar browsers disponíveis
npx cypress info
```

---

## 📚 Recursos Adicionais

- [Documentação do Cypress](https://docs.cypress.io/)
- [Documentação do ServeRest](https://serverest.dev/)
- [Documentação do Allure](https://docs.qameta.io/allure/)
- [Organizing Tests - Cypress Best Practices](https://docs.cypress.io/guides/references/best-practices#Organizing-Tests-Logging-In-Controlling-State)

---

## 📄 Licença

Este projeto está licenciado sob a licença ISC.

---

## 👤 Autor

**Thito Ribeiro**

- GitHub: [@thitoribeiro](https://github.com/thitoribeiro)

---

## 🙏 Agradecimentos

- [ServeRest Latina](https://serverest.dev/) pela aplicação de teste pública
- Comunidade Cypress pelo excelente framework
- Equipe Allure pelos relatórios detalhados

---

## 📝 Changelog

### Versão 1.0.0

- ✅ Implementação inicial de testes de cadastro público
- ✅ Implementação de testes de login
- ✅ Implementação de testes de cadastro autenticado
- ✅ Integração com Allure Reports
- ✅ Suporte multi-browser (Chrome, Firefox, Electron)
- ✅ Comandos customizados reutilizáveis
- ✅ Element Mapping + Custom Commands para mapeamento de elementos e ações
- ✅ Clean Code e boas práticas
