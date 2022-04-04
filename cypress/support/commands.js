Cypress.Commands.add('navigateTo', (url) => {
    cy.visit(Cypress.env('baseUrl') + url, {failOnStatusCode: false}) 
})