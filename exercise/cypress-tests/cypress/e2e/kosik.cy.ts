/// <reference types="cypress" />
import { LoginPage } from "../pages/loginPage";
import { ClientPage } from "../pages/clientPage";
import { SearchPage } from "../pages/searchPage";
import { CartPage } from "../pages/cartPage";

describe('Login page + Cart', () => {
  const email = Cypress.env('EMAIL');
  const password = Cypress.env('HESLO');
  const loginPage = new LoginPage();
  const clientPage = new ClientPage();
  const searchPage = new SearchPage();
  const cartPage = new CartPage();
  

  before(() => {
    loginPage.login(email, password);
    clientPage.validatePage();
    });
  

  it('Should find products and add them to cart', () => {
    
    cy.fixture('products.json').then((products) => {
      products.forEach((product: { code: string })=> {
        searchPage.searchProduct(product.code);
        searchPage.skuItem().should('contain', product.code);
        searchPage.addToCart();
      });
    
    cy.fixture('discountCoupon.json').then((data) => {
    cy.visit('/kosik');
    cartPage.insertCoupon(data.coupon);
    cy.get('.applied-coupon strong').should('contain.text', data.coupon).and('contain.text', 'Sleva');
      });
    products.forEach((product: any) => {
      cartPage.productNameInCart().should('contain.text', product.name);
      });  
    });
  });
});
