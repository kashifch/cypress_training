import login from '../pages/login_page'
import home from '../pages/home_page'
import dashboard from '../pages/dashbaord_page'

describe('Login UI tests', () => {

    it('lets the user login to the application', () => {
        cy.visit('/')
        home.goToLogin()
        login.fillLoginForm()
        login.submitLoginForm()
        dashboard.getButtonText().then(($btnText) => {
            expect($btnText).contains('Explore New Courses')
        })
    })
})