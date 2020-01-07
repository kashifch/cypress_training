import login from '../pages/login_page'
import home from '../pages/home_page'
import dashboard from '../pages/dashboard_page'

describe('Login tests', function () {
    beforeEach(function () {
        cy.visit('/')
        cy.fixture('credentials').as('userCred')
    })

    it('lets the user define alias and use through "this" keyword', function () {
        home.gotToLogin()
        cy.get('#login-email').as('loginEmail')
        cy.get('#login-password').as('loginPassword')
        cy.get('@loginEmail').type(this.userCred.valid_credentails.email)
        cy.get('@loginPassword').type(this.userCred.valid_credentails.password)
        login.submitLoginForm()
        dashboard.getButtonElement().contains('Explore New Courses').click()      
    })
    
    it('lets the user use fixture directly', function () {
        home.gotToLogin()
        cy.get('#login-email').as('loginEmail')
        cy.get('#login-password').as('loginPassword')
        cy.fixture('credentials').then(($userCred) => {
            login.fillLoginForm($userCred.valid_credentails.email, $userCred.valid_credentails.password)
            login.submitLoginForm()
        })
        dashboard.getButtonElement().contains('Explore New Courses').click()      
    })

    it('lets the user use fixture using get', function () {
        home.gotToLogin()
        cy.get('#login-email').as('loginEmail')
        cy.get('#login-password').as('loginPassword')
        cy.get('@userCred').then((userCred) => {
            login.fillLoginForm(userCred.valid_credentails.email, userCred.valid_credentails.password)
            login.submitLoginForm()
        })
        dashboard.getButtonElement().contains('Explore New Courses').click()      
    })

    it('explains the functioning of route', () => {
        const login = new LoginPage()
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
