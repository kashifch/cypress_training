class HomePage {

    goToLogin() {
        cy.get('.js-user-cta>a[href$="login"]').click()
    }
}

export default new HomePage