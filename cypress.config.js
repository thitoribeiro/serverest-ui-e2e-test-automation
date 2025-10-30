const { defineConfig } = require('cypress');
const fs = require('fs');

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
    setupNodeEvents(on, config) {
      // Remove vídeos apenas de specs que passaram (mantém apenas falhas)
      on('after:spec', (spec, results) => {
        if (results && results.stats.failures === 0 && results.video) {
          // Remove o vídeo se todos os testes passaram
          try {
            if (fs.existsSync(results.video)) {
              fs.unlinkSync(results.video);
            }
          } catch (error) {
            // Ignora erros ao deletar vídeos
          }
        }
      });
    }
  }
});
