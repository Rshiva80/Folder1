describe("empty spec1", () => {
  it("Google Search", () => {
    cy.visit("https://www.google.com/");
    cy.get(".gLFyf").type("Automation step by step {Enter}");
    //cy.contains("Google Search").click();
  });
});
