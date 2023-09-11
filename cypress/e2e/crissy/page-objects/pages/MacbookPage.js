export default class MacbookPage {
    //Confirming Price
    static confirmPrice() {
        cy.get('.price-container').should('have.text', '$700 *includes tax')
    }
    //Adding to cart
    static addtoCart() {
        cy.get('div [onclick="addToCart(11)"]').click()
     }
    }