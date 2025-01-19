const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://serverest.dev',
    specPattern: "cypress/api/**/*.cy.{js,jsx,ts,tsx}",
    supportFile: false,
    reporter: 'mochawesome', 
    reporterOptions: {
      reportDir: 'cypress/reports', 
      overwrite: false,  
      html: true, 
      json: false, 
    },
  },
});
