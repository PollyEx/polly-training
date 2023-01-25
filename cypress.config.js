const { defineConfig } = require('cypress');
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor');
const addCucumberPreprocessorPlugin =
  require('@badeball/cypress-cucumber-preprocessor').addCucumberPreprocessorPlugin;
const createEsbuildPlugin =
  require('@badeball/cypress-cucumber-preprocessor/esbuild').createEsbuildPlugin;

module.exports = defineConfig({
  defaultCommandTimeout: 5000,
  pageLoadTimeout: 5000,
  e2e: {
    async setupNodeEvents(on, config) {
      const bundler = createBundler({
        plugins: [createEsbuildPlugin(config)],
      });
      on('task', {
        log: message => {
          console.log(message);
          return null;
        }
      }),
      on('file:preprocessor', bundler);
      await addCucumberPreprocessorPlugin(on, config);

      return config;
    },
    specPattern: 'cypress/e2e/features/**/*.feature',
    baseUrl: 'http://127.0.0.1:8000',
    chromeWebSecurity: false,
    viewportHeight:1000,
  },
  env: {
    user: '',
    password: '',
  }
});
