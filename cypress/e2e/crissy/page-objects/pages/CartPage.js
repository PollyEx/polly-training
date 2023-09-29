export default class CartPage {

//Confirm Macbook is in cart
    static confirmMacBookCart() {
            cy.get('a').contains('Cart').should('be.visible')
                .click()
            cy.get('td').should('have.text', 'MacBook air700Delete')
    }
    
//Place Order
    static placeOrder() {
        cy.get('div [data-target="#orderModal"]')
            .click()
        cy.get('h5').contains('Place')
    }

//Submit Payment Form
    static submitPaymentForm() {
        cy.get('div [onclick="purchaseOrder()"]').click()
    }
    }
