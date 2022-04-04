// Import commands.js using ES2015 syntax:
import './commands'

Cypress.on("window:before:load", win => {
  cy.stub(win.console, "error").callsFake(msg => {
      // log out to the terminal
      cy.now("task", "error", msg)
      // log to Command Log and fail the test
      throw new Error(msg)
  })
  cy.stub(win.console, "warn").callsFake(msg => {
      // log out to the terminal
      cy.now("task", "warn", msg)
      // log to Command Log and fail the test
      throw new Error(msg)
  })

  cy.stub(win.console, "log").callsFake(msg => {
      // log out to the terminal
      cy.now("task", "log", msg)
      // log to Command Log and fail the test
      throw new Error(msg)
  })
})

  afterEach(() => {
    const screenshotsFolder = Cypress.config("screenshotsFolder");
    if (window.cucumberJson?.generate) {
        const testState = window.testState;
        const stepResult =
            testState.runTests[testState.currentScenario.name][testState.currentStep];
        if (stepResult?.status === "failed") {
            const screenshotFileName = `${testState.feature.name} -- ${testState.currentScenario.name} (failed).png`;
            cy.readFile(
                `${screenshotsFolder}/${Cypress.spec.name}/${screenshotFileName}`,
                "base64"
            ).then((imgData) => {
                stepResult.attachment = {
                    data: imgData,
                    media: { type: "image/png" },
                    index: testState.currentStep,
                    testCase: testState.formatTestCase(testState.currentScenario),
                };
            });

        }
    }
})