describe("HomePage", () => {
  it("passes", () => {
    cy.visit("https://advancedsurgery.baxter.com/");
    cy.get("#onetrust-accept-btn-handler").click();
    cy.contains("I reside in the U.S.").click();
    cy.get(".hero-heading").should("have.text", "Advancing the Art of Healing"); // checking the heading on the hero area
    cy.get(".two-col-image-section__content--links .button") // checking the button's color and font
      .should("have.css", "color", "rgb(0, 51, 153)")
      .should(
        "have.css",
        "font-family",
        'Geogrotesque, -apple-system, "system-ui", "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'
      );
      cy.get('#block-bax-specialty-main-nav > ul > :nth-child(1) > .arrow-link').click();
      cy.get('.feature > .button').click(); 
      cy.url().should('include','/learning-hub'); // check if the url is correct for Learning hub link
      cy.get('.site-title').click(); // Logo is clicked 
      cy.get('#block-bax-specialty-main-nav > ul > :nth-child(2) > .arrow-link').click();
      cy.get('.site-title').click(); // Logo is clicked 
      cy.get('#block-bax-specialty-main-nav > ul > :nth-child(3) > .arrow-link').click();
      cy.get('.site-title').click(); // Logo is clicked 
      cy.get('#block-bax-specialty-main-nav > ul > :nth-child(4) > .arrow-link').click();
      cy.url().should('include','/advantage');
      cy.get('.nav__utility--links > ul > :nth-child(1) > a').click();
      cy.url().should('include','/contact_us'); //check if the url is correct for contact us link
      cy.get('.nav__utility--links > ul > :nth-child(2) > a').click();
      cy.url().should('include','/contact_us#isi'); // the check if the url is correct for ISI link



  });
});
