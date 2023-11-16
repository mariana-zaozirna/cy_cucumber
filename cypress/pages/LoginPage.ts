import Page from './Page';

class LoginPage extends Page {
  public get inputUsername() {
    return cy.get('#user-name');
  }
  public get inputPassword() {
    return cy.get('#password');
  }
  public get loginBtn() {
    return cy.get('#login-button');
  }
  public get errorMessage() {
    return cy.get('[data-test="error"]');
  }
  public get inputUsernameErrorIcon() {
    return this.inputUsername.parent().get('.error_icon');
  }
  public get inputPasswordErrorIcon() {
    return this.inputPassword.parent().get('.error_icon');
  }

  public setUserNameValue(username: string) {
    if (username == '') {
      this.inputUsername.clear();
    } else {
      this.inputUsername.type(username);
    }
  }

  public setPasswordValue(password: string) {
    if (password == '') {
      this.inputPassword.clear();
    } else {
      this.inputPassword.type(password);
    }
  }
  public clickLoginBtn() {
    this.loginBtn.click();
  }

  open() {
    return super.open('');
  }
}

export default new LoginPage();
