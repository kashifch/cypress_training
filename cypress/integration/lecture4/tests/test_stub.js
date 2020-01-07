import loginUi from '../pages/login_page'
import home from '../pages/home_page'
import dashboard from '../pages/dashboard_page'

describe('Login tests', () => {
    
    it('stubbing', () =>{
        cy.visit('http://127.0.0.1:5500/test_stub.html')
        const stub = cy.stub()  
        cy.on ('window:alert', stub)
        cy.get('button').contains('Okay').click()
        .then(() => {
        expect(stub.getCall(0)).to.be.calledWith('You clicked Okay')      
        })  
    })

    it('stubbing and changing', () => {
        cy.visit('http://127.0.0.1:5500/test_stub.html', {
        onBeforeLoad(win) {
            cy.stub(win, 'prompt').returns('Kashif')
        }
        })
        cy.get('button').contains('Try it').click()
        cy.window().its('prompt').should('be.called')
        cy.get('#demo').should('have.text', 'Hello Kashif')
    }) 
    
})