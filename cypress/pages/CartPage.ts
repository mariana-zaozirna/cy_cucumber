import Page from './Page';

class CartPage extends Page {
  get inventoryItems() {
    return cy.get('.cart_item');
  }
  get checkOutBtn() {
    return cy.get('#checkout');
  }
  public clickcheckOutBtn() {
    this.checkOutBtn.click();
  }
}
export default new CartPage();
