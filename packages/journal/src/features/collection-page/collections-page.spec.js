/// <reference types="cypress" />

context("Collections", () => {
  beforeEach(() => {
    cy.visit("./tests/index.html");
    cy.clearFilesDb();
  });

  it("Adding, renaming and deleting items", () => {

    //Add collection and edit name
    cy.clickButton("add-collection"];    
    cy.get("header .si-editable-text").click().type("{backspace} A")

    //Add folder to collection and open
    cy.clickButton( "add-item-to-container");
    cy.clickMenuItem( "Add Folder");
    cy.clickLink("New item 1", "td");
    
    //Add document to folder and open
    cy.clickButton( "add-item-to-container");
    cy.clickMenuItem( "Add Document");
    cy.clickLink("New item 2", "td");
    cy.get("#documenteditor:first-child");

    //Go back to folder, add a child folder and open
    cy.clickLink("New item 1");
    cy.clickButton( "add-item-to-container");
    cy.clickMenuItem( "Add Folder");
    cy.clickLink("New item 3", "td");

    //Add a Wiki page to the new folder and view
    cy.clickButton( "add-item-to-container");
    cy.clickMenuItem( "Add Wiki Page");
    cy.clickLink("New item 4");
    cy.get(".rek-fixed-title");

    //Rename wiki page in tree view
    cy.get("[data-rt-element] .si-editable-text")
      .contains("New item 4").click().type("{backspace} A");

    // Go to grandparent folder and reload page
    cy.clickLink("New item 2");
    cy.wait(500);
    cy.reload();

    //Verify new items were persisted
    cy.get("body").contains("New collection A");
    cy.get("body").contains("New item A");    
    cy.get("[data-rt-element-wrapper]").first().children().should('have.length', 2);

    //Delete some items and verify removed
    cy.clickLink("New item 1", "[data-rt-element]");
    cy.clickButton("delete-container-item");
    cy.get("button").contains("Confirm").click();
    cy.get("[data-rt-element-wrapper]").first().children().should('have.length', 1);

  });
});
