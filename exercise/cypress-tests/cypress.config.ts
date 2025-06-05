import { defineConfig } from "cypress";

export default defineConfig({
  watchForFileChanges: false,
  defaultCommandTimeout: 15000,
  e2e: {
    baseUrl: 'https://qa-classic.myshoptet.com',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
