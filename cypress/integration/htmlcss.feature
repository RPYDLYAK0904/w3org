Feature: Htmlcss page

    Background: Navigate to the page
        When Navigate to the page

    Scenario: Validate console errors
        Then User shouldn't see console errors
     
    Scenario: Validate  response code
        Then User should see response code 200 from the page

    Scenario: Validate all links on the page
        Then Response codes should be 200