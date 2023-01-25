import Util from '../utils/util';
import User from '../support/user';
import * as UsersFixture from '../fixtures/users.json';

class LoginPage {
	elements = {
		usernameInput: () => cy.get('#login'),
		passwordInput: () => cy.get('#password'),
		loginBtn: () => cy.contains('button', 'Login'),
		errorMessage: () => cy.get('div.error'),
		topMenuNameDiv: (menuText) => cy.contains('div', menuText),
        pageLink: (href) => cy.get(`a[href="${href}"]`).first(),
        activeLink: () => cy.get('a.link-active'),
        currentTickerSpan: () => cy.get('button[aria-label="Collapse"] span.ticker'),
        oldLink: () => cy.get('a.inactive'),
        titleSpan: (title) => cy.contains(title),
        collapseOrgsButton: () => cy.get('button[aria--label="Collapse"]'),
        selectTickerLink: (ticker) => cy.contains('span.ticker', ticker).parent()
	};

	login(userType) {
		if (userType === 'unauthorized') {
			this.elements.usernameInput().type('Dummy User');
      		this.elements.passwordInput().type("dummyPassword");
      		this.elements.loginBtn().click();
		} else if ((userType !== 'unauthorized') && (userType === "release")) {
			this.elements.usernameInput().type(Cypress.env('user'));
			this.elements.passwordInput().type(Cypress.env('password'));
			this.elements.loginBtn().click();
		} else if ((userType !== 'release') && (userType != "unauthorized")) {
			cy.log("User: " + [UsersFixture[userType].email]);
			this.elements.usernameInput().type(UsersFixture[userType].email);
			this.elements.passwordInput().type(UsersFixture[userType].password);
			this.elements.loginBtn().click();
		}
    }
  
	/**
	 * Verifies that the error message is displayed and text is as expected
	 * @param {string} expectedMessage
	 */
	verifyErrorMessage(expectedMessage) {
		if (this.elements.errorMessage() !== expectedMessage) {
			throw new Error('We got the wrong message');
		}
	}

	/*
	* Navigates in the UI using the link text in the left navigation for the page
	* @param {string} pageName 
	*/
    navigateToPage(pageName) {
	   if (PageMetadata[pageName] !== undefined) {
		   this.elements.activeLink().as('linkElement');
		   cy.get('@linkElement').invoke('attr', 'href').then((href) => {
			   if (href !== PageMetadata[pageName].href) {
				   this.elements.pageLink(PageMetadata[pageName].href).click();
				   cy.wait(5000).then(() => {
					   cy.url().should('include', PageMetadata[pageName].href);
				   });
			   }
		   });
	   	} else {
		   throw new Error(`Page ${pageName} is not defined in the PageMetadata fixture`);
	   	}
		cy.log(5000);
   }

   /**
	* Switches to new organization if the ticket does not correspond to the current active ticker.
	* Verifies the current active ticker after the switch is indeed the one we wanted.
	* @param {string} ticker 
	*/
   switchCompany(ticker) {
	   this.elements.selectTickerLink(ticker).invoke('text').then((currentTickerText) => {
		   if (currentTickerText.trim() != ticker) {
			   this.elements.collapseOrgsButton().as('expand').invoke('attr', 'aria-expanded').then((expanded) => {
				   if (expanded != true) {
					   cy.get('@expand').click();
				   }
			   });
			   this.elements.selectTickerLink(ticker).should('be.visible').click();
			   cy.wait(10000);
			   this.elements.selectTickerLink(ticker).should('have.class', 'active');
		   }
	   });
    }
}

module.exports = new LoginPage();
