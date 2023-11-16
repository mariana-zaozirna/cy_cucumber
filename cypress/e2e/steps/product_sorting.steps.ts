import inventoryPage from '../../pages/InventoryPage';
import { When, Then } from '@badeball/cypress-cucumber-preprocessor';

When(/^user clicks on 'Name:(.*)' option on Inventory page$/, (sortValue: string) => {
  inventoryPage.selectNameSortOption(sortValue);
});

Then(/the products should be displayed in (.*) order by name/, (sortValue: string) => {
  inventoryPage
    .getAllTitlesValues()
    .then((allTiles) => {
      switch (sortValue) {
        case 'az':
          return allTiles.sort();
        case 'za':
          return allTiles.sort().reverse();
      }
    })
    .then((expectedTitles) => {
      inventoryPage.allTitles.should('have.length', expectedTitles.length).each((elem, i) => {
        cy.wrap(elem)
          .invoke('text')
          .then((actualText) => {
            expect(actualText.trim()).to.equal(expectedTitles[i]);
          });
      });
    });
});

When(/user clicks on 'Price:(.*)' option/, (pricevalue: string) => {
  inventoryPage.selectPriceOption(pricevalue);
});

Then(/the products are sorted in (.*) order/, (pricevalue: string) => {
  inventoryPage
    .getAllPricesValue()
    .then((allPrices) => {
      switch (pricevalue) {
        case 'lohi':
          return allPrices.sort((a, b) => { return a - b });
        case 'hilo':
          return allPrices.sort((a, b) => { return a - b }).reverse();
      }
    })
    .then((expectedPrices) => {
      inventoryPage.productsPriceValue.should('have.length', expectedPrices.length).each((elem, i) => {
        cy.wrap(elem)
          .invoke('text')
          .then((actualPrices) => {
            const numericActualPrice = Number(actualPrices.split('$')[1]); 
            expect(numericActualPrice).to.equal(expectedPrices[i]);
          });
      });
    });
});
