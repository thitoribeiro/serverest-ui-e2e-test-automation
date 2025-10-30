/**
 * @file cadastroElements.js
 * Mapeamento de elementos da tela de Cadastro.
 * Clean Code: nomes claros, imutabilidade, fonte única de verdade.
 */

const TEST_IDS = Object.freeze({
  name: 'nome',
  email: 'email',
  password: 'password',
  adminCheckbox: 'checkbox',
  submit: 'cadastrar',
  signIn: 'entrar'
});

const SELECTORS = Object.freeze({
  inputName: `[data-testid="${TEST_IDS.name}"], #nome`,
  inputEmail: `[data-testid="${TEST_IDS.email}"], #email`,
  inputPassword: `[data-testid="${TEST_IDS.password}"], #password`,
  adminCheckbox: `[data-testid="${TEST_IDS.adminCheckbox}"], #administrador`,
  submitButton: `[data-testid="${TEST_IDS.submit}"]`,
  signInLink: `[data-testid="${TEST_IDS.signIn}"]`,
  form: 'form.form',
  feedbackMessage: '.message.form-text',
  alertMessage: '.alert.alert-secondary',
  alertClose: '.alert .btn-close-error-alert, .alert [data-dismiss="alert"]',
  toastMessage: '.alert, [role="alert"], [role="status"], .toast, [data-testid*="toast"], [data-cy*="toast"]',
  toastClose: '.alert .btn-close-error-alert, .alert [data-dismiss="alert"], [data-testid*="toast-close"], [data-cy*="toast-close"], .toast [aria-label="close"], .toast .close'
});

module.exports = SELECTORS;
