class LoginPage {

    fillLoginForm(userEmail, userPassword) {
        cy.get('input[id="login-email"]').type(userEmail)
        cy.get('#login-password').type(userPassword)
    }

    submitLoginForm() {
        cy.get('button[type="submit"]').click()
    }
}

export default LoginPage