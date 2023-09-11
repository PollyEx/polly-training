export default class BasePage {
    static pause(ms) {
        cy.wait(500)
    }
    static logInfo(message) {
        cy.log(message)
    }
}
