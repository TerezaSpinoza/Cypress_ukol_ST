export class CartPage {
    discountCoupon = ()  => cy.get('[data-testid="inputDiscountCoupon"]');
    addDiscountCoupon = ()  => cy.get('[data-testid="buttonSubmitDiscountCoupon"]');
    productNameInCart = () => cy.get('[data-testid="cartProductName"]');


insertCoupon(coupon: string) {
   this.discountCoupon().type(coupon)
   this.addDiscountCoupon().click()
    };
};