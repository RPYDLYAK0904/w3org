# w3org

1. To run test from Docker:
    - Download Docker on your machine
    - To build image run:
    - docker build -t cypress-w3org .
    - To run tests on Chrome run:
    - docker-compose run e2e-chrome
    - To run tests on Firefox run:
    - docker-compose run e2e-firefox
    - To run cross browser with paralel executon:
    - docker-compose up

There are 2 reports implemented: cucumber-html-report for Chrome and mochawesome for Firefox. 
Two html reports will be generated when paralel executing in dockerReportsChrome and dockerReportsFirefox folders.


2. To run tests loccaly:
    - To install dependencies run:
    - npm install
    - To run on Chrome run:
    - npm run test:chrome
    - To run on Firefox run:
    - npm run test:firefox

Reports will be generated into reports-chrome and reports-firefox folders respectively 

3. To run in Cypress test runner:
    - npm run cy:open
