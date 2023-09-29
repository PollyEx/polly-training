import BasePage from '../crissy/page-objects/pages/BasePage'
import HomePage from '../crissy/page-objects/pages/HomePage'
import LaptopPage from '../crissy/page-objects/pages/LaptopPage'
import MacbookPage from '../crissy/page-objects/pages/MacbookPage'
import CartPage from '../crissy/page-objects/pages/CartPage'

//Step1: Should navigate to Demoblaze website
describe('browser actions', () => {
    beforeEach('should load demoblaze website', () => {
        HomePage.demoBlazeHome();
    })
    
//Step2: Should select Laptops
    beforeEach('should click on Laptops category', () => {
        cy.get('a#itemc.list-group-item').contains('Laptops')
            .should('be.visible').click();
    })

//Step3: Should select Macbook Air
    beforeEach('should click on MacBook air', () => {
        LaptopPage.macBookAir();
    })

//Step 4: Should confirm price is correct
    beforeEach('should confirm price', () => {
        MacbookPage.confirmPrice();
    })

//Step 5: Should add to cart
    beforeEach('should add to cart', () => {
        MacbookPage.addToCart();
    })

//Step 7: Should verify item in cart
    beforeEach('should verify product in cart', () => {
        CartPage.confirmMacBookCart();
    })

//Step 8: Should place order
    beforeEach('should place order', () => {
        CartPage.placeOrder();
        BasePage.pause();
    })

//Step 9: Should enter form
    beforeEach('should enter form', () => {
        cy.get('#name.form-control').should('be.visible').type('Test Name');
        cy.get('#name.form-control').should('have.value', 'Test Name');
        cy.get('#country.form-control').type('Canada');
        cy.get('#country.form-control').should('have.value', 'Canada');
        cy.get('#city.form-control').type('Letterkenny');
        cy.get('#city.form-control').should('have.value', 'Letterkenny');
        cy.get('#card.form-control').type('1111 2222 3333 4444');
        cy.get('#card.form-control').should('have.value', '1111 2222 3333 4444');
        cy.get('#month.form-control').type('05');
        cy.get('#month.form-control').should('have.value', '05');
        cy.get('#year.form-control').type('66');
        cy.get('#year.form-control').should('have.value', '66');

    })

//Step 10: Should submit form
    beforeEach('should submit form', () => {
        CartPage.submitPaymentForm();
    })

//Step 11: Shoud confirm purchase was successful
    beforeEach('should confirm purchase was successful', () => {
        cy.get('h2').should('be.visible').contains('Thank you for your purchase!');
        cy.get('p.lead.text-muted')
            .should('contain.text', 'Amount: 700 USDCard Number: 1111 2222 3333 4444Name: Test Name');
        cy.wait(500);
        cy.get('div [class="sa-confirm-button-container"]').should('be.visible').click();
    })

//Step 12: Should be brought back to demoblaze website
    it('should return to demoblaze website', () => {
        cy.url().should('include', 'index.html');
    })
})
    