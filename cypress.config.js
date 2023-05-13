const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout: 3000,
  viewportHeight: 1080,
  viewportWidth: 1920,
  videoCompression: 51,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});