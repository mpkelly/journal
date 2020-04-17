/// <reference types="cypress" />

context("Collections", () => {
  beforeEach(() => {
    cy.visit("./tests/index.html");
  });

  it("cy.document() - get the document object", () => {
    cy.get('[data-id="add-collection"]');
  });
});
