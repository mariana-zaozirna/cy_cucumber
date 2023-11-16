import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import cartPage from '../../pages/CartPage';
import checkoutCompletePage from '../../pages/CheckoutCompletePage';
import checkoutPage from '../../pages/CheckoutPage';
import overviewPage from '../../pages/OverviewPage';
import inventoryPage from '../../pages/InventoryPage';
// @ts-ignore
import getPageField from '../../support/helper.js';

Given(`'Cart' has 1 product`, () => {
  inventoryPage.addProductToCart();
});
When(`user navigates to Checkout page`, () => {
  inventoryPage.clickShoppingCartButton();
  cartPage.clickcheckOutBtn();
});
When(
  /^user sends 'Checkout' form with (.*), (.*), (.*)$/,
  (firstName: string, lastName: string, postalCode: string) => {
    checkoutPage.setFirstNameValue(firstName);
    checkoutPage.setLastNameValue(lastName);
    checkoutPage.setPostalCodeValue(postalCode);
    checkoutPage.clickContinueButton();
  }
);
When(`user clicks on 'Finish' button on Overview page`, () => {
  overviewPage.clickFinishButton();
});
Then(`website is redirected to the Checkout Complete page`, () => {
  const baseUrl = Cypress.config('baseUrl');
  cy.url().should('eq', `${baseUrl}checkout-complete.html`);
});
Then(/^user should see message saying (.*)$/, (message: string) => {
  checkoutCompletePage.successMsg.should('be.visible');
  checkoutCompletePage.successMsg.should('contain.text', message);
});
Then(/^user should see a message saying (.*)$/, (message: string) => {
  checkoutPage.errorMsg.should('be.visible');
  checkoutPage.errorMsg.should('contain.text', message);
});
Then(/^(.+) is highlighted in red color$/, (input: string) => {
  getPageField(checkoutPage, input).should('have.attr', 'placeholder');
  getPageField(checkoutPage, input).should('be.empty');
  getPageField(checkoutPage, input).should('have.class', 'error');
});
Then(`all inputFields has cross icon`, () => {
  checkoutPage.firstNameErrorIcon().should('be.visible');
  checkoutPage.latNameErrorIcon().should('be.visible');
  checkoutPage.postalCodeErrorIcon().should('be.visible');
});
