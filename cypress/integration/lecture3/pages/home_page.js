class HomePage {

    gotToLogin() {
    
        cy.get('.js-user-cta').find('a[href$="login"]').click()
        
    }    
    
}

export default new HomePage