export default class Navbar {
    static clickonLogo() {
    cy.get('.navbar-brand').click()
    }
    static clickonHome() {
    cy.get('nav-link').click()
    }
    static clickonContact() {
    cy.get('nav-link').click()
    }
    static clickonAboutus() {
    cy.get('nav-link').click()
    }
    static clickonCart() {
    cy.get('a#cartur.nav-link').click()
    }
    static clickonLogin() {
    cy.get('a#login2.nav-link').click()
    }
    static clickonSignin() {
    cy.get('a#signin2.nav-link').click()
    }
    }
    