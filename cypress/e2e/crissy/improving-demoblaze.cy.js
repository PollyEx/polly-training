//Step1: Should navigate to Demoblaze website
describe('browser actions', () => {
    beforeEach('should load demoblaze website', () => {
        cy.visit('https://www.demoblaze.com/index.html#', { timeout: 10000 })
        cy.url().should('include', 'index.html')
    })
//Step2: Should select Laptops
    beforeEach('should click on Laptops category', () => {
        cy.get('a#itemc.list-group-item').contains('Laptops')
            .should('be.visible')
            .click()
    })
//Step3: Should select Macbook Air
    beforeEach('should click on MacBook air', () => {
        cy.get('h4 [href="prod.html?idp_=11"]')
            .should('be.visible')
            .click()
        cy.get('h2').should('have.text','MacBook air')
    })
//Step 4: Should confirm price is correct
    beforeEach('should confirm price', () => {
        cy.get('.price-container')
            .should('have.text', '$700 *includes tax')
    })
//Step 5: Should add to cart
    beforeEach('should add to cart', () => {
        cy.get('div [onclick="addToCart(11)"]')
            .click()
    })
//Step 7: Should verify item in cart
    beforeEach('should verify product in cart', () => {
        cy.get('a')
            .contains('Cart').should('be.visible')
            .click()
        cy.get('td').should('have.text', 'MacBook air700Delete')
    })
//Step 8: Should place order
    beforeEach('should place order', () => {
        cy.get('div [data-target="#orderModal"]')
            .click()
        cy.get('h5').contains('Place')
        cy.wait(500)
    })
//Step 9: Should enter form
    beforeEach('should enter form', () => {
        cy.get('#name.form-control').should('be.visible').type('Test Name')
        cy.get('#country.form-control').type('Canada')
        cy.get('#city.form-control').type('Letterkenny')
        cy.get('#card.form-control').type('1111 2222 3333 4444')
        cy.get('#month.form-control').type('05')
        cy.get('#year.form-control').type('66')
    })
//Step 10: Should submit form
    beforeEach('should submit form', () => {
        cy.get('div [onclick="purchaseOrder()"]')
            .click() 
    })
//Step 11: Shoud confirm purchase was successful
    beforeEach('should confirm purchase was successful', () => {
        cy.get('h2').should('be.visible').contains('Thank you for your purchase!')
        cy.get('p.lead.text-muted').should('contain.text','Amount: 700 USDCard Number: 1111 2222 3333 4444Name: Test Name')
        cy.wait(500)
        cy.get('div [class="sa-confirm-button-container"]')
            .should('be.visible')
            .click() 
    })
//Step 12: Should be brought back to demoblaze website
    it('should return to demoblaze website', () => {
        cy.url().should('include', 'index.html')
    })
})