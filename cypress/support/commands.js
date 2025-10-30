const elements = require('./elements/cadastroElements');
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
