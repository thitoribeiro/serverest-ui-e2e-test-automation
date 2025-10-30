// cypress.config.js
const { defineConfig } = require('cypress');
const fs = require('fs');
const allureWriter = require('@shelex/cypress-allure-plugin/writer');
require('dotenv').config(); // carrega .env na inicialização

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://front.serverest.dev',
    supportFile: 'cypress/support/e2e/index.js',
    specPattern: 'cypress/e2e/**/*.cy.js',
    viewportWidth: 1366,
    viewportHeight: 768,
    video: true,
    screenshotOnRunFailure: true,
    defaultCommandTimeout: 8000,
    env: {
      allure: true,
      allureReuseAfterSpec: true
    },

    setupNodeEvents(on, config) {
      // Configuração do Allure
      allureWriter(on, config);

      // Prioriza o que já existir em config.env, senão lê do .env / process.env
      config.env = {
        ...config.env,
        LOGIN_EMAIL:    config.env.LOGIN_EMAIL    || process.env.CYPRESS_LOGIN_EMAIL || '',
        LOGIN_PASSWORD: config.env.LOGIN_PASSWORD || process.env.CYPRESS_LOGIN_PASSWORD || '',
        LOGIN_NAME:     config.env.LOGIN_NAME     || process.env.CYPRESS_LOGIN_NAME || ''
      };

      const missing = [];
      if (!config.env.LOGIN_EMAIL)    missing.push('CYPRESS_LOGIN_EMAIL');
      if (!config.env.LOGIN_PASSWORD) missing.push('CYPRESS_LOGIN_PASSWORD');
      if (missing.length) {
        console.warn(`[cypress.config] Atenção: defina no .env -> ${missing.join(', ')}`);
      }

      on('after:spec', (spec, results) => {
        if (results && results.stats && results.stats.failures === 0 && results.video) {
          try {
            if (fs.existsSync(results.video)) fs.unlinkSync(results.video);
          } catch (_) {
          }
        }
      });

      return config;
    }
  }
});
