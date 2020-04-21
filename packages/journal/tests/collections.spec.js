/// <reference types="cypress" />

context("Collections", () => {
  beforeEach(() => {
    // const request = indexedDB.deleteDatabase("SiamWikiDatabase");
    // request.onsuccess = function () {
    //   console.log("Deleted database successfully");
    // };
    cy.visit("./tests/index.html");
  });

  it("Add and rename collection", () => {
    cy.get('[data-id="add-collection"]').click();

    cy.get('[data-id="collection"] span[value="My collection"]').click();

    cy.get('[data-id="collection"] span[value="My collection"]').click();

    cy.get('[data-id="collection"] [contenteditable=true]')
      .type("New name")
      .blur();
  });
});
