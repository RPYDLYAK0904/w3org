import { When, Then, And } from 'cypress-cucumber-preprocessor/steps'

When('User navigate to bad page', () => {
    cy.intercept('GET', '**/badpage').as('getBadpage')
    cy.visit('https://www.w3.org/standards/badpage', {failOnStatusCode: false})   
})

Then('User shouldn\'t see console errors', () => {
    cy.window().then((win) => {
        expect(win.console.error).to.have.callCount(0)
        expect(win.console.warn).to.have.callCount(1)
      })
})

And('User should see response code 404 from the page', () => {
    cy.get('@getBadpage').then( xhr => {
        expect(xhr.response.statusCode).to.equal(404)
    })
}) 
