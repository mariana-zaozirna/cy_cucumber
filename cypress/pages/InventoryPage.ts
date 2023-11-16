import Page from './Page';

class InventoryPage extends Page {
  public get shoppingCartbtn() {
    return cy.get('#shopping_cart_container');
  }
  public get inventoryItems() {
    return cy.get('.inventory_item');
  }
  public get burgerMenuBtn() {
    return cy.get('#react-burger-menu-btn');
  }
  public get elementsNumber() {
    return cy.get('.bm-item.menu-item');
  }
  public get logoutBtn() {
    return cy.get('#logout_sidebar_link');
  }

  public get addToCartButton() {
    return cy.get('.btn.btn_primary.btn_small.btn_inventory');
  }
  public addProductToCart() {
    this.addToCartButton.eq(1).click();
  }
  public clickShoppingCartButton() {
    this.shoppingCartbtn.click();
  }
  public get productsPriceValue() {
    return cy.get('.inventory_item_price');
  }

  public get allTitles() {
    return cy.get('.inventory_item_name');
  }
  public get productSortContainer() {
    return cy.get('.product_sort_container');
  }
  public clickBurgerButton() {
    this.burgerMenuBtn.click();
  }
  public clickLogoutButton() {
    this.logoutBtn.click();
  }

  public selectNameSortOption(nameSort: string) {
    this.productSortContainer.select(nameSort);
  }

  public selectPriceOption(priceValue: string) {
    this.productSortContainer.select(priceValue);
  }

  public getAllTitlesValues() {
    let titleTexts: string[] = [];
    return this.allTitles
      .should('be.visible')
      .each((elem) => {
        cy.log('elem' + elem.text());
        const text: string = elem.text();
        titleTexts.push(text);
      })
      .then(() => titleTexts);
  }

  public getAllPricesValue() {
    let allPrices: number[] = [];
    return this.productsPriceValue
      .should('be.visible')
      .each((elem) => {
        const price: string = elem.text();
        const numericPrice: number = Number(price.split('$')[1]);
        allPrices.push(numericPrice);
      })

      .then(() => allPrices);
  }

  open() {
    return super.open(`inventory.html`);
  }
}

export default new InventoryPage();
