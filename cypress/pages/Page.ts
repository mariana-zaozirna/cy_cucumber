export default class Page {
  protected open(path: string) {
    return cy.visit(path);
  }
}
