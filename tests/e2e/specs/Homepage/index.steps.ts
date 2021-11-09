import { Given, Then } from 'cypress-cucumber-preprocessor/steps';

Given('I open the homepage', () => {
  cy.visit('/');
});

Then(/^I should see "([^"]*)" as page title$/, (expectedTitle) => {
  cy.title().should('eq', expectedTitle);
});

Then(/^The main title should be "([^"]+)"$/i, (expectedH1) => {
  cy.get('h1').should('have.text', expectedH1);
});
