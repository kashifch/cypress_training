import dashbaord from '../pages/dashbaord_page'
import helpers from '../utils/helper_functions'

describe('Login PAI tests', () => {
    before(()=> {
        helpers.loginUsingApi()
    })

    beforeEach(()=> {
        Cypress.Cookies.preserveOnce('stage-edx-sessionid', 'edxloggedin', 'stage-edx-user-info', 'csrftoken')
        cy.visit('/')
        
    })
    it('lets the user go to loggedin page', () => {
        dashbaord.getButtonText().then(($buttonText) => {
            expect($buttonText).contains('Explore New Courses')
        })
    })

    it('lets the user go to loggedin page', () => {
        dashbaord.getButtonText().then(($buttonText) => {
            expect($buttonText).contains('Explore New Courses')
        })
    })

    after(() => {
        cy.clearCookies()
    })
})