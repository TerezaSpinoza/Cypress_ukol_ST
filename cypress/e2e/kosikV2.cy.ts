/// <reference types="cypress" />
import { LoginPage } from "../pages/loginPage";
import { ClientPage } from "../pages/clientPage";
import { ProductPage } from "../pages/productPage";
import { CartPage } from "../pages/cartPage";
import { calculateExpectedFinalPrice } from "../support/priceCount";
import type { Product } from '../support/types';

describe('Login, adding products, inserting coupon and validating the price', () => {
  const email = Cypress.env('EMAIL');
  const password = Cypress.env('HESLO');
  const loginPage = new LoginPage();
  const clientPage = new ClientPage();
  const productPage = new ProductPage();
  const cartPage = new CartPage();

  let products: Product[] = [];
  let coupon: string;
  let couponDiscount: number;


  before(() => {
    cy.fixture('products.json').then((data) => {
      products = data;
    });

    cy.fixture('discountCoupon.json').then((couponData) => {
      coupon = couponData.coupon;
      couponDiscount = couponData.discount;
    });

    loginPage.login(email, password);
    clientPage.validatePage();
  });

   beforeEach(() => {
    cy.visit('/kosik');               
    cartPage.clearCart();             
    cartPage.clearCoupon();           
    });

  it('Should add products using url and validate price with discount coupon', () => {
    
    products.forEach((product) => {
      cy.visit(product.url);
      cy.location('pathname', { timeout: 10000 }).should('eq', product.url);
      productPage.addToCart();
    });

    cy.visit('/kosik');

    products.forEach((product) => {
      cartPage.productNameInCart().should('contain.text', product.name);
    });

    cartPage.insertCoupon(coupon);

    cy.get('.applied-coupon strong')
      .should('contain.text', coupon)
      .and('contain.text', 'Sleva');

    const expectedFinalPrice = calculateExpectedFinalPrice(products, couponDiscount);
    
    cartPage.getFinalPriceFromCart().then((displayedPrice) => {
      expect(displayedPrice).equal(expectedFinalPrice);
    });
    
  });
});