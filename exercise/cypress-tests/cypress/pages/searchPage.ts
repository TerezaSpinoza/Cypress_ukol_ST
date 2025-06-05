export class SearchPage {
searchInput = () => cy.get('input[data-testid="searchInput"]').eq(0)
addToCartButton = () => cy.get('button[data-testid="buttonAddToCart"]')
skuItem = () => cy.get('span[data-micro="sku"]')
messNotif = () => cy.get('[data-testid="notifierMessage"]')

  searchProduct(productCode: string) {
    cy.wait(1000)
   this.messNotif().should('not.exist', {timeout: 20000} );
   this.searchInput().clear( {force: true}).type(productCode + '{enter}', { force: true});
  }

  addToCart() {
    this.addToCartButton().click();
  }
}