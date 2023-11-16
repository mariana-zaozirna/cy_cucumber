import { Given } from '@badeball/cypress-cucumber-preprocessor';
import loginPage from '../../pages/LoginPage';

Given(/^user is logged in with valid credentials: '(.*)', '(.*)'$/, (username: string, password: string) => {
  loginPage.open();
  loginPage.setUserNameValue(username);
  loginPage.setPasswordValue(password);
  loginPage.clickLoginBtn();
});
