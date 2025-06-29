export class ProductPage {
addToCartButton = () => cy.get('button[data-testid="buttonAddToCart"]')
 
  addToCart() {
    this.addToCartButton().click();
  }
}