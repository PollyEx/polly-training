export default class HomePage {

    //Accessing demoblaze website
static demoBlazeHome() {
        cy.visit('https://www.demoblaze.com/index.html#', { timeout: 10000 })
        cy.url().should('include', 'index.html')
    }
    
//Accessing Cart
static cart() {
    cy.get('a').contains('Cart').should('be.visible')
        .click()
    }
}