describe('Browser Actions', () => {
    beforeEach('should load books website', () => {
        cy.visit('http://books.toscrape.com/index.html', { timeout: 10000 })
        cy.url().should('include', 'index.html')
    })

    it('should click on Poetry category', () => {
        cy.get('a')
            .contains('Poetry')
            .click()
        cy.get('h1').contains('Poetry')
    })

    beforeEach('should click on Olio book', () => {
        cy.get('.product_pod')
            .contains('Olio')
            .click()
    })

    it('should confirm price', () => {
        cy.get('.price_color')
            .should('contain', 23.88)
    })
})



