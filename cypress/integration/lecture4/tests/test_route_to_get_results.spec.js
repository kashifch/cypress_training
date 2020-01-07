import login from '../helpers/login_api'
import dashboard from '../pages/dashboard_page'

describe('Login tests', () => {
    before(() => {
        login.loginApi(Cypress.env('USER_EMAIL'), Cypress.env('user_password'))
    })

    beforeEach(()=> {
        Cypress.Cookies.preserveOnce('stage-edx-sessionid', 'edxloggedin', 'stage-edx-user-info', 'csrftoken')
        cy.visit('/')
    })

    it('lets the user search results and save these results in a file', () => {
        dashboard.getButtonElement().contains('Explore New Courses').click()
        cy.get('.js-result-msg.hide-phone').contains('2058')
        cy.server()
        cy.route('**search?query=Javascript**', '@jsResults').as('searchData')
        cy.get('.js-search-header input[name="search_query"]').type('Javascript{Enter}')
        cy.wait('@searchData').then((xhr) => {
            cy.writeFile('cypress/fixtures/javascriptResults.json', xhr.responseBody)
        })  
    })      
})