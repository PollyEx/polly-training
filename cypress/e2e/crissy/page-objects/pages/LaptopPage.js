export default class LaptopPage {
    //Selecting MacBook
    static macBookAir() {
        cy.get('h4 [href="prod.html?idp_=11"]')
            .should('be.visible') .click()
        cy.get('h2').should('have.text', 'MacBook air')
    }
    
}
