import { Given, Then, When } from '@badeball/cypress-cucumber-preprocessor';
import LoginPage from '../../pages/loginPage';
import * as PageMetadata from '../../fixtures/pageMetadata.json';

Given(/^the user switches to organization "(.*)"$/, (ticker) => {
    LoginPage.switchCompany(ticker);
});

Then(/^each page below loads successfully$/, (dataTable) => {
  const rows = dataTable.hashes();
  for (const row of rows) {
    const pageName = row.pageName;
    cy.log(`**** Page name: ${pageName} ****`);
    LoginPage.navigateToPage(pageName);
    cy.wait(5000);
  }
});

When(/^the user navigates to the "(.*)" tab$/, (pageName) => {
  LoginPage.navigateToPage(pageName);
});
