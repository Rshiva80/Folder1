describe("describe the webelement function", () => {
  it("Verify the dropdown and checkbox", () => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

    //checkbox
    cy.get("#checkBoxOption1")
      .check()
      .should("be.checked")
      .and("have.value", "option1");
    cy.get("input[type= 'checkbox']")
      .check(["option2", "option3"])
      .should("be.checked");
    cy.get("input[type= 'checkbox']").uncheck(["option2"]);

    //dropdown
    cy.get("select").select("Option1").should("have.value", "option1");

    //dynamic drop down

    
  });
});
