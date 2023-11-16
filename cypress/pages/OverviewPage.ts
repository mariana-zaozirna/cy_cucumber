import Page from './Page';

class Overview extends Page {
  public get finishBtn() {
    return cy.get('#finish');
  }
  public clickFinishButton() {
    this.finishBtn.click();
  }
}

export default new Overview();
