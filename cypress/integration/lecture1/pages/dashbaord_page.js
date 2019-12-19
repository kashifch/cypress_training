/// <reference types = "cypress"/>
class DashboardPage {

    getButtonText() {
        return cy.get('a.btn-neutral').invoke('text')
    }
}

export default new DashboardPage