const elements = require('./elements/cadastroElements');
const loginElements = require('./elements/loginElements');
const { buildUser } = require('./utils/userPayload');

Cypress.Commands.add('visitCadastro', () => {
  cy.visit('/cadastrarusuarios');
});

Cypress.Commands.add('preencherCadastro', (user = buildUser()) => {
  cy.get(elements.inputName).clear().type(user.name);
  cy.get(elements.inputEmail).clear().type(user.email);
  cy.get(elements.inputPassword).clear().type(user.password);
  if (user.acceptTerms !== undefined) {
    cy.get(elements.adminCheckbox).then($el => {
      const checked = $el.is(':checked');
      if (user.acceptTerms && !checked) cy.wrap($el).click();
      if (!user.acceptTerms && checked) cy.wrap($el).click();
    });
  }
  return cy.wrap(user);
});

Cypress.Commands.add('submeterCadastro', () => {
  cy.get(elements.submitButton).click();
});

Cypress.Commands.add('assertToast', (text) => {
  cy.get(elements.toastMessage, { timeout: 10000 }).should('be.visible').and('contain.text', text);
});

Cypress.Commands.add('fecharToast', () => {
  cy.get(elements.toastClose).click({ force: true });
});

Cypress.Commands.add('loginUI', () => {
  const email = Cypress.env('LOGIN_EMAIL');
  const password = Cypress.env('LOGIN_PASSWORD');

  expect(email, 'LOGIN_EMAIL deve estar definido em Cypress.env').to.be.a('string').and.not.be.empty;
  expect(password, 'LOGIN_PASSWORD deve estar definido em Cypress.env').to.be.a('string').and.not.be.empty;

  cy.visit('/login', { log: false });
  cy.get(loginElements.inputEmail, { log: false }).type(email, { log: false });
  cy.get(loginElements.inputPassword, { log: false }).type(password, { log: false });
  cy.get(loginElements.submitButton, { log: false }).click({ log: false });
  cy.url({ log: false }).should('match', /(\/admin\/home|\/home)/);
});
