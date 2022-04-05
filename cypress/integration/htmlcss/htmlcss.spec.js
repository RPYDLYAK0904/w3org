import { When, Then } from "cypress-cucumber-preprocessor/steps"
import htmlcss from "../../support/pages/htmlcss"

When('Navigate to the page', () => {
  cy.intercept('GET', '**/htmlcss').as('getHtmlcss')
  cy.navigateTo('standards/webdesign/htmlcss')
})

Then('User shouldn\'t see console errors', () => {
  cy.window().then((win) => {
      expect(win.console.error).to.have.callCount(0)
    })
})

Then('User should see response code 200 from the page', () => {
  cy.get('@getHtmlcss').then( xhr => {
      expect(xhr.response.statusCode).to.equal(200)
  })
})

Then('Response codes should be 200', () => {
  htmlcss.allLinks.each(page => {
          const link = page.prop('href')
          cy.request({
            url: link,
            failOnStatusCode: false
          }).then(response => {                
            expect(response.status).to.equal(200)
          })
      })
})

