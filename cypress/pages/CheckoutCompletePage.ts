import Page from './Page';

class CheckoutCompletePage extends Page {
  get successMsg() {
    return cy.get('.complete-header');
  }
}

export default new CheckoutCompletePage();
