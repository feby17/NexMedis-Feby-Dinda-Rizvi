import { defineConfig } from "cypress";

export default defineConfig({
  experimentalStudio: true,
  defaultCommandTimeout: 10000,
  pageLoadTimeout: 60000,
  viewportHeight: 1080,
  viewportWidth: 1920,
  e2e: {
    baseUrl: "https://stg-app.nexmedis.com/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
