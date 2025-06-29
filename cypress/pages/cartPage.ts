export class CartPage {
    discountCoupon = ()  => cy.get('[data-testid="inputDiscountCoupon"]');
    addDiscountCoupon = ()  => cy.get('[data-testid="buttonSubmitDiscountCoupon"]');
    productNameInCart = () => cy.get('[data-testid="cartProductName"]');
    totalPriceWithDiscounts = () => cy.get('[data-testid="recapFullPrice"]');
    deleteItemButtons = () => cy.get('[data-testid="buttonDeleteItem"]');
    removeCouponButton = () => cy.get('[data-testid="buttonRemoveDiscountCoupon"]');


insertCoupon(coupon: string) {
   this.discountCoupon().type(coupon)
   this.addDiscountCoupon().click()
    };

 getFinalPriceFromCart(): Cypress.Chainable<number> {
    return this.totalPriceWithDiscounts()
      .invoke('text')
      .then((text) => {
        const price = parseFloat(text.replace(/[^\d,.-]/g, '').replace(',', '.'));
        return price;
      });
  }

 clearCart() {
  cy.get('body').then(($body) => {
    if ($body.find('[data-testid="buttonDeleteItem"]').length > 0) {
      cy.get('[data-testid="buttonDeleteItem"]').each(($btn) => {
        cy.wrap($btn).click({ force: true });
      });
    }
  });
}

clearCoupon() {
  cy.get('body').then(($body) => {
    if ($body.find('[data-testid="buttonRemoveDiscountCoupon"]').length > 0) {
      cy.get('[data-testid="buttonRemoveDiscountCoupon"]').click({ force: true });
    }
  });
}
};