/// <reference types="cypress" />

const messages = require('../fixtures/messages.json');
const elements = require('../support/elements/loginElements');
const homeElements = require('../support/elements/homeElements');

describe('Login de Usuário', () => {
  beforeEach(() => {
    cy.visit('/login');
  });

  // Helpers
  const closeAlertsIfAny = () => {
    cy.get('body').then($b => {
      if ($b.find(elements.alertClose).length) {
        cy.get(elements.alertClose).each($btn => cy.wrap($btn).click({ force: true }));
        cy.get(elements.alertMessage).should('not.exist');
      }
    });
  };

  const assertAlert = (text) => {
    cy.get(elements.alertMessage).should('be.visible').and('contain.text', text);
  };

  // Negativos
  it('Tentativa de login com campos vazios', () => {
    cy.get(elements.submitButton).should('be.enabled').click();
    assertAlert(messages.emailRequired);
    assertAlert(messages.passwordRequired);
    closeAlertsIfAny();
    cy.url().should('include', '/login');
  });

  it('Tentativa de login apenas com senha preenchida', () => {
    cy.get(elements.inputPassword).type('Teste@123', { log: false });
    cy.get(elements.submitButton).click();
    assertAlert(messages.emailRequired);
    closeAlertsIfAny();
    cy.url().should('include', '/login');
  });

  it('Tentativa de login apenas com e-mail preenchido', () => {
    cy.get(elements.inputEmail).type('user@uorak.com');
    cy.get(elements.submitButton).click();
    assertAlert(messages.passwordRequired);
    closeAlertsIfAny();
    cy.url().should('include', '/login');
  });

  it('Tentativa de login com e-mail inválido', () => {
    cy.get(elements.inputEmail).type('thito.ribeiro#hotmail.com').blur();
    cy.get(elements.inputEmail).then(($el) => {
      const el = $el[0];
      expect(el.checkValidity(), 'input email validity').to.be.false;
    });
    cy.get(elements.inputPassword).type('Teste@123', { log: false });
    cy.get(elements.submitButton).click();
    cy.url().should('include', '/login');
  });

  it('Tentativa de login com credenciais inválidas', () => {
    cy.get(elements.inputEmail).type('no-user@uorak.com');
    cy.get(elements.inputPassword).type('SenhaErrada123!', { log: false });
    cy.get(elements.submitButton).click();

    // Verifica se aparece alert ou toast com mensagem de erro
    cy.get('body').then($b => {
      if ($b.find(elements.alertMessage).length > 0) {
        cy.get(elements.alertMessage).should('be.visible');
      } else {
        cy.get('.alert, [role="alert"], [role="status"], .toast, [data-cy="toast"]').should('be.visible');
      }
    });

    cy.url().should('include', '/login');
    closeAlertsIfAny();
  });

  // Positivo
  it('Login com credenciais válidas', () => {
    const email = Cypress.env('LOGIN_EMAIL');
    const password = Cypress.env('LOGIN_PASSWORD');
    const userName = Cypress.env('LOGIN_NAME');

    expect(email, 'LOGIN_EMAIL (.env)').to.be.a('string').and.not.be.empty;
    expect(password, 'LOGIN_PASSWORD (.env)').to.be.a('string').and.not.be.empty;

    // Login
    cy.get(elements.inputEmail).type(email);
    cy.get(elements.inputPassword).type(password, { log: false });
    cy.get(elements.submitButton).click();

    // URL Home
    cy.url().should('match', /(\/admin\/home|\/home)/);

    // Navbar
    cy.get(homeElements.navHome).should('be.visible').and('contain.text', 'Home');
    cy.get(homeElements.navCadUsuarios).should('be.visible');
    cy.get(homeElements.navListUsuarios).should('be.visible');
    cy.get(homeElements.navCadProdutos).should('be.visible');
    cy.get(homeElements.navListProdutos).should('be.visible');
    cy.get(homeElements.navRelatorios).should('be.visible');
    cy.get(homeElements.navLogout).should('be.visible').and('contain.text', 'Logout');

    // Greeting
    cy.get(homeElements.greetingH1)
      .should('be.visible')
      .then($h1 => {
        const text = $h1.text();
        expect(text).to.match(/Bem Vindo/i);
        if (userName) expect(text).to.include(userName);
      });

    // Texto de apoio
    cy.get(homeElements.leadText)
      .should('be.visible')
      .and('contain.text', 'administrar seu ecommerce');

    // Cards
    cy.get(homeElements.cardCadUsuariosBtn).should('be.visible').and('contain.text', 'Cadastrar');
    cy.get(homeElements.cardListUsuariosBtn).should('be.visible').and('contain.text', 'Listar');
    cy.get(homeElements.cardCadProdutosBtn).should('be.visible').and('contain.text', 'Cadastrar');
    cy.get(homeElements.cardListProdutosBtn).should('be.visible').and('contain.text', 'Listar');
    cy.get(homeElements.cardRelatoriosBtn).should('be.visible').and('contain.text', 'Ver');
  });
});
