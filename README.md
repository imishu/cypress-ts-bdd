## Pre-Requisite
Ensure node js is installed. Before new installation you can check using the below. If already installed, you will see the output on the screen.
```bash
  npm -v
```
or

```bash
  node -v
```
## Project Folder
Create a folder where the tests and releated folders will reside

## NPM initialisation:
- Using the terminal within Visual Studio Code (or Command Prompt/Terminal) access the folder
- Run the below npm command
```bash
  npm init
```
or
```bash
  npm initi -y
```

## Package Installation
### Cypress: 
- Install Cypress with npm command

```bash
  npm i -D cypress
```
- Once installed, within the terminal run the below:
```bash
  npx cypress open
```  
- Once Cypress browser is up and running, configure the Cypress E2E in the cypress browser.
- Within the Visual Studio Code: 
create 2 folders 'features' and 'step_definitions' under '/cypress/e2e/' folder.
create 1 folder 'pages' under '/cypress/' folder.

### Typescript: 
- Install Typescript with npm command and set up as below:
```bash
  npm i -D typescript
```
- Create a new .json file with exact name as 'tsconfig.json' at the project level
- Within the 'tsconfig.json' file paste the below:
```json
  {
  "compilerOptions": {
      "baseUrl": ".",
      "paths": {
          "@pages/*": [
              "./cypress/pages/*"
          ]
      }
  }
}
```
- Save the file

### cypress-cucumber-preprocessor:
- Install Typescript with npm command and set up as below:
```bash
  npm i -D @badeball/cypress-cucumber-preprocessor
```
- Create a new json file with the exact name '.cypress-cucumber-preprocessorrc.json' within the project level.
- Within the '.cypress-cucumber-preprocessorrc.json' file paste the below:
```json
  {
  "json": {
    "enabled": true,
    "output": "jsonreport/test.json"
  },
  "stepDefinitions": [
    "[filepath]/**/*.{js, ts}",
    "[filepath].{js,ts}",
    "cypress/e2e/step_definitions/*.{js,ts}"
  ]
}
```
### Other Packages:
Install the below packages one by one (If not automatically installed):
```bash
  npm i -D @bahmutov/cypress-esbuild-preprocessor
```
```bash
  npm i -D @cypress/webpack-preprocessor
```
```bash
  npm i -D esbuild
```

## Configurations:
- Check 'package.json' has the below: (xx.xx.x is an example of version)
```json
"devDependencies": {
    "@badeball/cypress-cucumber-preprocessor": "^xx.xx.x",
    "@bahmutov/cypress-esbuild-preprocessor": "^xx.xx.x",
    "@cypress/webpack-preprocessor": "^xx.xx.x",
    "cypress": "^xx.xx.x",
    "esbuild": "^xx.xx.x",
    "typescript": "^xx.xx.x"
  }
```
- Click on 'cypress.config.ts' file and remove everything in it. And paste the below:
```typescript
const { defineConfig } = require("cypress");
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor')
const webpack = require("@cypress/webpack-preprocessor");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const addCucumberPreprocessorPlugin = require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;


module.exports = defineConfig({
  e2e: {
    async setupNodeEvents(on, config) {
      const bundler = createBundler({
        plugins: [createEsbuildPlugin(config)],
      });
      on("file:preprocessor", bundler);
      await addCucumberPreprocessorPlugin(on, config);

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
```
### Reporting:
Install cypress-mochawesome-reporter npm install --save-dev cypress-mochawesome-reporter

Open cypress.config.ts file
1. Within the defineConfig, add below:
```typescript
  reporter: 'cypress-mochawesome-reporter', // for html reports
  reporterOptions: {
    charts: true,
    reportPageTitle: 'OrangeHRM: Test Report',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
    quiet: true,
    debug: true
  }
```
2. Within the e2e's setupNodeEvents, add the below:
```typescript
  require('cypress-mochawesome-reporter/plugin')(on); // for html reports
```

### Running Tests:
1. Default (headless) & Chrome: npx cypress run --browser chrome  
2. Headed in Chrome: npx cypress run --headed  --browser chrome
2. 