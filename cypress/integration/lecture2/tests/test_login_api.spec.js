import login from '../helpers/login_apii'

describe('Login tests', () => {
    before(() => {
        login.loginApi()
    })

    beforeEach(()=> {
        Cypress.Cookies.preserveOnce('stage-edx-sessionid', 'edxloggedin', 'stage-edx-user-info', 'csrftoken')
        cy.visit('/')
    })

    it('lets the user login to the application', () => {
        cy.title().should('contain', 'Dashboard')
    })

    it('lets the user login to the application', () => {
        cy.title().should('contain', 'Dashboard')
    })
})