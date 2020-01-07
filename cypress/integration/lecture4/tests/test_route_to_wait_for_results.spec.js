import login from '../pages/login_page'
import home from '../pages/home_page'
import dashboard from '../pages/dashboard_page'

describe('Login tests', function () {
    beforeEach(function () {
        cy.visit('/')
    })

    it('wait for search results using route', () => {
        home.gotToLogin()
        login.fillLoginForm(Cypress.env('user_email'), Cypress.env('user_password'))
        login.submitLoginForm()
        dashboard.getButtonElement().contains('Explore New Courses').click()
        cy.get('.js-result-msg.hide-phone').contains('2058')
        cy.server()
        cy.route({
            method: 'GET',
            url: '**search**',
          }).as('searchData')
        cy.get('.js-search-header input[name="search_query"]').type('Javascript{Enter}')
        cy.wait('@searchData').then((xhr) => {
            cy.get('.js-result-msg.hide-phone').contains('24')
        })        
    })

    
})
