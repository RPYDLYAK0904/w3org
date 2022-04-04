import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'

When('Navigate to the page', () => {
    cy.intercept('GET', '**/badpage').as('getBadpage')
    cy.visit('https://www.w3.org/standards/badpage', {failOnStatusCode: false})   
})

Then('User shouldn\'t see console errors', () => {
    cy.window().then((win) => {
        expect(win.console.error).to.have.callCount(0)
      })
})

Then('User should see response code 404 from the page', () => {
    cy.get('@getBadpage').then( xhr => {
        expect(xhr.response.statusCode).to.equal(404)
    })
})

Then('Response codes should be 200', () => {
    cy.get("a[href]").each(page => {
            const link = page.prop('href')
            cy.request({
              url: link,
              failOnStatusCode: false
            }).then(response => {                
              expect(response.status).to.equal(200)
            })
        })
})
