export default class CartPage {
    //Confirm Macbook is in Cart
    static confirmmacbookCart() {
        cy.get('a').contains('Cart').should('be.visible').click()
        cy.get('td').should('have.text', 'MacBook air700Delete')
    }
    //Page Order
    static placeOrder() {
        cy.get('div [data-target="#orderModal"]').click()
        cy.get('h5').contains('Place')
    }
    //Submit Payment Form
    static submitpaymentForm() {
        cy.get('div [onclick="purchaseOrder()"]').click()
    }
}