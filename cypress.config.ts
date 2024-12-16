import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    supportFile: 'tests/e2e/support/e2e.{js,jsx,ts,tsx}',
    specPattern: 'tests/e2e/specs/**/*.cy.{js,jsx,ts,tsx}',
    videosFolder: 'tests/e2e/videos',
    screenshotsFolder: 'tests/e2e/screenshots',
    baseUrl: 'http://localhost:8100',
    setupNodeEvents(on, config) {
      on('after:run', async () => {
        // Teardown function to stop the server gracefully
        await new Promise((resolve, reject) => {
          // Assuming you have a server instance to close
          server.close((err) => {
            if (err) {
              reject(err);
            } else {
              resolve();
            }
          });
        });
      });
    },
  },
});
