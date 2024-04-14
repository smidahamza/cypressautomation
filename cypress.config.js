const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "gh9jty",
  e2e: {
    "fixturesFolder":"cypress/datas",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
