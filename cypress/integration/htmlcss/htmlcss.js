import { When, Then, And } from "cypress-cucumber-preprocessor/steps"

When('User navigates to Htmlcss page', () => {
    cy.intercept('GET', '**/htmlcss').as('getHtmlcss')
    cy.visit('https://www.w3.org/standards/webdesign/htmlcss')
})

Then('User shouldn\'t see console errors', () => {
    cy.window().then((win) => {
        expect(win.console.error).to.have.callCount(0)
        expect(win.console.warn).to.have.callCount(0)
      })
})

And('User should see response code 200 from the page', () => {
    cy.get('@getHtmlcss').then( xhr => {
        expect(xhr.response.statusCode).to.equal(200)
    })
})

Then('User clicks on all links and lands on live pages no 4xx', () => {
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

