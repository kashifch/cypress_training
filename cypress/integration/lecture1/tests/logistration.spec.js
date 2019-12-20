describe('Login and Registration tests', () => {
    beforeEach(()=> {
        cy.visit('/')
    })
    it.only('lets the user login to the application', () => {
        cy.get('.js-user-cta>a[href$="login"]').click()
        cy.get('input[id="login-email"]').type('temp_user@yopmail.com')
        cy.get('#login-password').type('edxedxedx1')
        cy.get('button[type="submit"]').click()
        cy.title().should('contain', 'Dashboard')
    })

    it('lets a new user register', ()=> {
        cy.get('.js-user-cta>a[href$="register"]').click()
        cy.get('#register-email').type('temp_user1343535351@yopmail.com')
        cy.get('#register-name').type('Temp User')
        cy.get('#register-username').type('TempUser144353541')
        cy.get('#register-password').type('edxedxedx1')
        cy.get('#register-country').select('Pakistan')
        cy.get('button[type="submit"]').click()
    })
})