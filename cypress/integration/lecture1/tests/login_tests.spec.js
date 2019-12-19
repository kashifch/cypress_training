import login from '../pages/login_page'
import home from '../pages/home_page'

describe('Login UI tests', () => {

    it('lets the user login to the application', () => {
        cy.visit('/')
        home.goToLogin()
        login.fillLoginForm()
        login.submitLoginForm()
    })
})