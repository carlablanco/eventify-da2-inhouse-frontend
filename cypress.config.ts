import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl:
      'http://backclusterinhouseloadbalancer-1956526135.us-east-1.elb.amazonaws.com:3001'
  }
});
