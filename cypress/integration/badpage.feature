Feature: Bad page

    Scenario: Validate console errors and response code
     When User navigate to bad page
     Then User shouldn't see console errors
     And User should see response code 404 from the page
     