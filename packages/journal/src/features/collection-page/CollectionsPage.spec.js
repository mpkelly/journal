/// <reference types="cypress" />

import {ACollection, ADocument} from "../../../cypress/fixtures/Fixtures"

context("Collections Page", () => {
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
    cy.contains("body", "New collection A");
    cy.contains("body", "New item A");    
    cy.get("[data-rt-element-wrapper]").first().children().should('have.length', 2);

    //Delete some items and verify removed
    cy.clickLink("New item 1", "[data-rt-element]");
    cy.clickButton("delete-container-item");
    cy.contains("button", "Confirm").click();
    cy.get("[data-rt-element-wrapper]").first().children().should('have.length', 1);

  });

  it("Create a template ", () => {

    //Load a document
    cy.insertFiles([ACollection, ADocument])
    cy.reload();
  
    //Open tem[late tab and press create
    cy.clickLink("AFile", "[data-rt-element]");
    cy.clickButton("template-tab");    
    cy.contains("button", "Create Template").click();

    //Rename template, create and check count
    cy.get("[data-test=dialog] input.si-input")
      .type("{backspace}{backspace}{backspace}{backspace}Template")
    cy.contains("button", "Confirm").click();

    cy.get("[data-test=template-card]").should("have.length", 1)
  }));
});
