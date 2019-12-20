class HomePage {

    gotToLogin() {
        cy.get('.js-user-cta>a[href$="login"]').click()
    }    
    
}

export default new HomePage