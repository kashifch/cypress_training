class LoginPage {

    fillLoginForm() {
        cy.get('#login-email').type('temp_user@yopmail.com')
        cy.get('#login-password').type('edxedxedx1')
    }

    submitLoginForm() {
        cy.get('button[type="submit"]').click()
    }
}

export default new LoginPage