export class ClientPage {

    validatePage() {
     cy.url().should('include', '/klient')
  }
}