//Step1: Should navigate to Demoblaze website
describe('browser actions', () => {
    beforeEach('should load demoblaze website', () => {
        cy.visit('https://www.demoblaze.com/index.html#', { timeout: 10000 })
        cy.url().should('include', 'index.html')
        cy.wait(2000)
    })
//Step2: Should select Laptops
    beforeEach('should click on Laptops category', () => {
        cy.get('a')
            .contains('Laptops')
            .click()
        cy.wait(2000)
    })
//Step3: Should select Macbook Air
    beforeEach('should click on MacBook air', () => {
        cy.get('h4')
            .contains('MacBook air')
            .click()
        cy.wait(2000)
        cy.get('h2').contains('air')
    })
//Step 4: Should confirm price is correct
    beforeEach('should confirm price', () => {
        cy.get('.price-container')
            .should('contain', 700)
    })
//Step 5: Should add to cart
    beforeEach('should add to cart', () => {
        cy.get('a')
            .contains('Add')
            .click()
    })
//Step 7: Should verify item in cart
    beforeEach('should verify product in cart', () => {
        cy.get('a')
            .contains('Cart')
            .click()
        cy.wait(2000)
        cy.get('h3').contains('700')
        cy.get('td').contains('air')
    })
//Step 8: Should place order
    beforeEach('should place order', () => {
        cy.get('.btn')
            .contains('Place Order')
            .click()
        cy.wait(2000)
        cy.get('h5').contains('Place')
    })
//Step 9: Should enter form
    beforeEach('should enter form', () => {
        cy.get('#name.form-control').type('Test Name')
        cy.get('#country.form-control').type('Canada')
        cy.get('#city.form-control').type('Letterkenny')
        cy.get('#card.form-control').type('1111 2222 3333 4444')
        cy.get('#month.form-control').type('05')
        cy.get('#year.form-control').type('66')
    })
//Step 10: Should submit form
    beforeEach('should submit form', () => {
        cy.get('.btn')
            .contains('Purchase')
            .click() 
    })
//Step 11: Shoud confirm purchase was successful
    it('should confirm purchase was successful', () => {
        cy.get('h2').contains('Thank you for your purchase!')
        cy.get('p').contains('Amount: 700 USD')
        cy.get('p').contains('Card Number: 1111 2222 3333 4444')
        cy.get('p').contains('Name: Test Name')
    cy.wait(2000)
    cy.get('.btn')
        .contains('OK')
        .click() 
    })
//Step 12: Should be brought back to demoblaze website
    it('should return to demoblaze website', () => {
        cy.url().should('include', 'index.html')
    })
})