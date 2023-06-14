import{Given,When,Then} from "@badeball/cypress-cucumber-preprocessor";
import {loginPage} from "@pages/LoginPage";
import {sidePanel} from "@pages/SidePanel";
import {topBar} from "@pages/TopBar"
// import Commands from "cypress/support/commands";

Given("I am on the login page", ()=>{
    cy.visit("/");
})

When("I enter username '{}'", (username:string)=>{
    loginPage.typeUsername(username);
})

When("I enter password '{}'", (password:string)=>{
    loginPage.typePassword(password);
})

When("I click Login button", ()=>{
    loginPage.clickLogin();
})

When("I log in as an admin", ()=>{
    cy.fixture('orangehrm').then((data)=>{
        // loginPage.typeUsername(data.username);
        // loginPage.typePassword(data.password);
        // loginPage.clickLogin();
        // Commands.loginToApp(data.username, data.password);
        cy.loginToApp(data.username, data.password);
    })
})

Then("I am logged in to the OrangeHRM portal", ()=>{
    sidePanel.sidePanelIsVisible();
    topBar.userAreaIsVisible();
})

Then("I see branding logo", ()=>{
    loginPage.brandingLogoIsVisible();
})

Then("I see login label", ()=>{
    loginPage.validateLoginSectionLabel();
})

Then("I see login logo", ()=>{
    loginPage.loginLogoIsVisible();
})

Then("I see username components", ()=>{
    loginPage.validateUsernameComponents();
})

Then("I see password components", ()=>{
    loginPage.validatePasswordComponents();
})

Then("I see the Login button", ()=>{
    loginPage.validateLoginButton();
})

Then("I see invalid login error message", ()=>{
    loginPage.validateInvalidLoginErrorMessage();
})

Then("I see required username field error", ()=>{
    loginPage.validateUsernameRequiredFieldErrorMessage();
})

Then("I see required password field error", ()=>{
    loginPage.validatePasswordRequiredFieldErrorMessage();
})

Then("I see the Forget your password? link", ()=>{
    loginPage.validateForgetYourPasswordLink();
})

Then("I see copyright components", ()=>{
    loginPage.validateFooterCopyrightComponents();
})

Then("I see social media footer components", ()=>{
    loginPage.validateFooterSocialMediaComponents();
})
