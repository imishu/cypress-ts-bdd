class LoginPage {
  elements = {
    companyBrandingLogo: () => cy.get(".orangehrm-login-branding > img"),
    loginSectionLabel: () => cy.get(".oxd-text.orangehrm-login-title"),
    loginLogo: () => cy.get(".orangehrm-login-logo > img"),
    usernameIcon: () => cy.get(".oxd-icon.bi-person.oxd-input-group__label-icon"),
    usernameLabel: () => cy.get(":nth-child(2) > .oxd-input-group > .oxd-input-group__label-wrapper > .oxd-label"),
    usernameInput: () => cy.get(".oxd-input[name='username']"),
    passwordIcon: () => cy.get(".oxd-icon.bi-key.oxd-input-group__label-icon"),
    passwordLabel: () => cy.get(":nth-child(3) > .oxd-input-group > .oxd-input-group__label-wrapper > .oxd-label"),
    passwordInput: () => cy.get(".oxd-input[type='password']"),
    loginButton: () => cy.get(".orangehrm-login-button"),
    forgotYourPasswordLink: () => cy.get(".orangehrm-login-forgot-header"),
    invalidLoginErrorMessageIcon: () => cy.get(".orangehrm-login-error .bi-exclamation-circle.oxd-alert-content-icon"),
    invalidLoginErrorMessage: () => cy.get(".orangehrm-login-error .oxd-alert-content-text"),
    usernameRequiredFieldErrorMesage: () => cy.get(".oxd-form-row:nth-child(2) .oxd-input-group .oxd-input-field-error-message"),
    passwordRequiredFieldErrorMesage: () => cy.get(".oxd-form-row:nth-child(3) .oxd-input-group .oxd-input-field-error-message"),
    footerOSVersionDecelration: () => cy.get(".orangehrm-copyright-wrapper > :nth-child(1)"),
    footerCopyrightDecleration: () => cy.get(".orangehrm-copyright-wrapper > :nth-child(2)"),
    footerSocialMedia_linkedin: () => cy.get("[href^='https://www.linkedin.com/company/orangehrm/']"),
    footerSocialMedia_facebook: () => cy.get("[href^='https://www.facebook.com/OrangeHRM/']"),
    footerSocialMedia_twitter: () => cy.get("[href^='https://twitter.com/orangehrm']"),
    footerSocialMedia_youtube: () => cy.get("[href^='https://www.youtube.com/c/OrangeHRMInc']"),
  };

  typeUsername(username) {
    this.elements.usernameInput().type(username);
  }

  typePassword(password) {
    this.elements.passwordInput().type(password);
  }

  clickLogin() {
    this.elements.loginButton().click();
  }

  submitLogin(username, password) {
    this.typeUsername(username);
    this.typePassword(password);
    this.clickLogin();
  }

  brandingLogoIsVisible(){
    this.elements.companyBrandingLogo().should("be.visible");
  }

  validateLoginSectionLabel(){
    this.elements.loginSectionLabel().should("have.text", "Login");
  }

  loginLogoIsVisible(){
    this.elements.loginLogo().should("be.visible");
  }

  validateUsernameComponents(){
    this.elements.usernameIcon().should("be.visible");
    this.elements.usernameLabel().should("have.text", "Username");
    this.elements.usernameInput().should("have.attr", "placeholder", "Username");
  }

  validatePasswordComponents(){
    this.elements.passwordIcon().should("be.visible");
    this.elements.passwordLabel().should("have.text", "Password");
    this.elements.passwordInput().should("have.attr", "placeholder", "Password");
  }

  validateLoginButton(){
    this.elements.loginButton().should("be.enabled");
    this.elements.loginButton().should($el => expect($el.text().trim()).to.equal("Login"));
  }

  validateInvalidLoginErrorMessage(){
    this.elements.invalidLoginErrorMessageIcon().should("be.visible");
    this.elements.invalidLoginErrorMessage().should("have.text", "Invalid credentials");
  }

  validateUsernameRequiredFieldErrorMessage(){
    this.elements.usernameRequiredFieldErrorMesage().should("have.text", "Required");
  }

  validatePasswordRequiredFieldErrorMessage(){
    this.elements.passwordRequiredFieldErrorMesage().should("have.text", "Required");
  }

  validateForgetYourPasswordLink(){
    this.elements.forgotYourPasswordLink()
      .should($el => expect($el.text().trim()).to.equal("Forgot your password?"));
  }

  validateFooterCopyrightComponents(){
    this.elements.footerOSVersionDecelration().should("contain.text", "OrangeHRM OS");
    this.elements.footerCopyrightDecleration().should("have.text", "© 2005 - 2023 OrangeHRM, Inc. All rights reserved.");
  }

  validateFooterSocialMediaComponents(){
    this.elements.footerSocialMedia_linkedin().should("be.visible");
    this.elements.footerSocialMedia_facebook().should("be.visible");
    this.elements.footerSocialMedia_twitter().should("be.visible");
    this.elements.footerSocialMedia_youtube().should("be.visible");
  }
}

export const loginPage = new LoginPage();