import { defineConfig } from "cypress";
import createBundler = require('@bahmutov/cypress-esbuild-preprocessor');

const addCucumberPreprocessorPlugin = require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;

module.exports = (on, config) => {
  on('before:browser:launch', (browser = {}, launchOptions) => {
    console.log(launchOptions.args)

    if (browser.name == 'chrome') {
      launchOptions.args.push('--disable-gpu')
    }

    return launchOptions
  })
}
module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter', // for html reports
  reporterOptions: {
    charts: true,
    reportPageTitle: 'OrangeHRM: Test Report',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
    quiet: true,
    debug: true
  },
  e2e: {
    async setupNodeEvents(on, config) {
      const bundler = createBundler({
        plugins: [createEsbuildPlugin(config)],
      });
      on("file:preprocessor", bundler);
      await addCucumberPreprocessorPlugin(on, config);
      require('cypress-mochawesome-reporter/plugin')(on); // for html reports

      return config;
    },
    baseUrl: "https://opensource-demo.orangehrmlive.com/web/index.php",
    specPattern: "cypress/e2e/features/*.feature",
    pageLoadTimeout: 5000,
    requestTimeout: 10000,
    defaultCommandTimeout: 5000,
    chromeWebSecurity: false,
    screenshotOnRunFailure: true,
    watchForFileChanges: false
  }
});