/// <reference types="cypress" />

describe('example to-do app', () => { 
    beforeEach(() => {
        cy.visit('https://www.demoblaze.com/index.html')
    })

    it('should do this', () => {
        cy.contains('Samsung galaxy s6').click();
        cy.contains('Add to cart').click();
        cy.contains('Home').click();
        cy.contains('Nokia lumia 1520').click();
        cy.contains('Add to cart').click();
        cy.contains('Home').click();
        cy.contains('Cart').click();

        cy.get('#totalp').should('have.text', '1180');

        cy.contains('Place Order').click();
        
        cy.wait(1000);

        cy.get('#name').type('test')
        cy.get('#country').type('test')
        cy.get('#city').type('test')
        cy.get('#card').type('12309812102938')
        cy.get('#month').type('12')
        cy.get('#year').type('23')

        cy.contains('Purchase').click();
    })
})