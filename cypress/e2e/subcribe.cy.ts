describe("Newsletter Subscribe Form", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000")
  })

  it("allows users to subscribe to the email list", () => {
    cy.getByData("email-input").type("kreema1602@gmail.com")
    cy.getByData("submit-button").click()

    //Assertion success
    cy.getByData("success-message")
      .should("exist")
      .contains("kreema1602@gmail.com")
  })

  it("does NOT allow an invalid email address", () => {
    cy.getByData("email-input").type("kreema1602")
    cy.getByData("submit-button").click()

    //Assertion fail
    cy.getByData("success-message").should("not.exist")
  })
})
