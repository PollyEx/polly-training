import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import LoginPage from '../../pages/loginPage';

Given(/^the user navigates to the login page$/, () => {
	cy.visit('/', { timeout: 10000 });
	cy.url().should('contain', 'login');
});

When(/^an "(.*)" user tries to login$/, () => {
	LoginPage.login('unauthorized');
});

Then(/^the login page displays the message "(.*)"$/, errorMessage => {
	LoginPage.verifyErrorMessage(errorMessage);
});

When(/^(?:the|a) "(.*)" user is logged in$/, userType => {
	LoginPage.login(userType);
	cy.log(`baseUrl: ${Cypress.config().baseUrl}`);
	cy.url().should('eq', `${Cypress.config().baseUrl}/`);
});
