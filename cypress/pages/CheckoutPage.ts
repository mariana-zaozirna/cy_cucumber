import Page from './Page';

class CheckoutPage extends Page {
  get continueBtn() {
    return cy.get('#continue');
  }
  get firstNameInput() {
    return cy.get('#first-name');
  }
  get lastNameInput() {
    return cy.get('#last-name');
  }
  get postalCodeInput() {
    return cy.get('#postal-code');
  }
  get errorMsg() {
    return cy.get('[data-test="error"]');
  }
  public firstNameErrorIcon() {
    return this.firstNameInput.parent().get('.error_icon');
  }
  public latNameErrorIcon() {
    return this.lastNameInput.parent().get('.error_icon');
  }
  public postalCodeErrorIcon() {
    return this.postalCodeInput.parent().get('.error_icon');
  }

  public setFirstNameValue(firstName: string) {
    if (firstName == '') {
      this.firstNameInput.clear();
    } else {
      this.firstNameInput.type(firstName);
    }
  }
  public setLastNameValue(lastName: string) {
    if (lastName == '') {
      this.lastNameInput.clear();
    } else {
      this.lastNameInput.type(lastName);
    }
  }
  public setPostalCodeValue(postalCode: string) {
    if (postalCode == '') {
      this.postalCodeInput.clear();
    } else {
      this.postalCodeInput.type(postalCode);
    }
  }
  public clickContinueButton() {
    this.continueBtn.click();
  }
}

export default new CheckoutPage();
