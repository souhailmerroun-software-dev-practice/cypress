describe("Sample Test", () => {
  it("Visits the main page and checks the page title", () => {
    cy.visit("https://example.com");
    cy.title().should("include", "Example Domain");
  });
});
