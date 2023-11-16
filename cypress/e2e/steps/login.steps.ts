import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import loginPage from '../../pages/LoginPage';
import inventoryPage from '../../pages/InventoryPage';
// @ts-ignore
import getPageField from '../../support/helper.js';

Given(`user is on the login page`, () => {
  loginPage.open();
});

When(/^user logins with (.*) and (.*)$/, (login: string, password: string) => {
  loginPage.setUserNameValue(login);
  loginPage.setPasswordValue(password);
});

When(`user clicks 'Login' button`, () => {
  loginPage.clickLoginBtn();
});

Then(`website is redirected to the Inventory page`, () => {
  const baseUrl = Cypress.config('baseUrl');
  cy.url().should('eq', `${baseUrl}inventory.html`);
});

Then(`products and cart are displayed`, () => {
  inventoryPage.shoppingCartbtn.should('be.visible');
  inventoryPage.inventoryItems.should('be.visible');
});

Then(/^user should see a flash message saying (.*)$/, (message: string) => {
  loginPage.errorMessage.should('contain.text', message);
});

Then(`form is in error state`, () => {
  loginPage.inputUsernameErrorIcon.should('be.visible');
  loginPage.inputPasswordErrorIcon.should('be.visible');
  loginPage.inputUsername.should('have.class', 'error');
  loginPage.inputPassword.should('have.class', 'error');
});

Then(/^(\w+) is highlighted in red$/, (input: string) => {
  getPageField(loginPage, input).should('have.class', 'error');
});

Then(/^(\w+) has cross icon$/, (input: string) => {
  getPageField(loginPage, `${input}ErrorIcon`).should('be.visible');
});

Given(/^user is logged into the system with (.*) and (.*)$/, (login: string, password: string) => {
  loginPage.setUserNameValue(login);
  loginPage.setPasswordValue(password);
  loginPage.clickLoginBtn();
});
When(`user clicks on the 'Burger' button at the top-left corner`, () => {
  inventoryPage.clickBurgerButton();
});
When(`user clicks on the 'Logout' button`, () => {
  inventoryPage.clickLogoutButton();
});
Then(`website is redirected to the Login page`, () => {
  const baseUrl = Cypress.config('baseUrl');
  cy.url().should('eq', `${baseUrl}`);
});
Then(`'Username' and 'Password' fields are empty`, () => {
  loginPage.inputUsername.should('be.empty');
  loginPage.inputPassword.should('be.empty');
});
