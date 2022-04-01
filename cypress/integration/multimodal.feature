Feature: Multimodal page

    Scenario: Validate console errors and response code
     When User navigates to Multimodal page
     Then User shouldn't see console errors
     And User should see response code 200 from the page

    Scenario: Validate All links on the page go to another live page
     When User navigates to Multimodal page  
     Then User clicks on all links and lands on live pages no 4xx