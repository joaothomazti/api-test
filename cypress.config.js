const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://serverest.dev',
    specPattern: "cypress/api/**/*.cy.{js,jsx,ts,tsx}",
    reporter: 'mochawesome', 
    reporterOptions: {
      reportDir: 'cypress/reports', 
      overwrite: false,  
      html: false, 
      json: true, 
    },
  },
});
