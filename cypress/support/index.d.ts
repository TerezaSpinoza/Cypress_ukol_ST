/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    /**
     * Custom command to log in via form
     * @param email Email of the user
     * @param password Password of the user
     */
    login(email: string, password: string): Chainable<void>;
  }
}