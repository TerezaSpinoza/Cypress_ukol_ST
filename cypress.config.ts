import { defineConfig } from "cypress";

export default defineConfig({
  watchForFileChanges: false,
  defaultCommandTimeout: 15000,
  projectId: "5x84gp",
  e2e: {
    baseUrl: 'https://qa-classic.myshoptet.com',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
