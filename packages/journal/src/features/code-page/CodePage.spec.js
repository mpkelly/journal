/// <reference types="cypress" />
import {ACollection, ADefaultCssCodeFile, ADocument} from "../../../cypress/fixtures/Fixtures"

context("Code Page", () => {
  beforeEach(() => {
    cy.visit("./tests/index.html");
    cy.clearDb();    
  });

  it("Default code gets linked to new docs ", () => {
    //Insert a doc and code file marked as 'default' (global)
    cy.insertFiles([ACollection, ADocument])
    cy.insertCode(ADefaultCssCodeFile)
    cy.reload();
    cy.clickLink("Code")    
  
    //Make sure our file is there
    cy.contains("tbody tr", "Default.css")
    
    //Open document and check code tab to if file is linked
    cy.clickLink("AFile", "[data-rt-type=0]");
    cy.clickButton("code-tab");

    //Verify the css rules were applied to the editor
    cy.contains("#codeeditor code", "66px")
    cy.get("#documenteditor p")
      .should('have.css', 'font-size', '66px')
  })

  it("Delete code file ", () => {
    //Insert a simple template and go to templates page
    cy.insertCode(ADefaultCssCodeFile)
    cy.reload();
    cy.clickLink("Code")    
  
    //Verify file is there and open menu
    cy.contains("tbody tr", "Default.css")
    cy.get("tbody tr td:last-child")
      .click();
    
    //Delete file and verify removed from table
    cy.clickMenuItem("Delete");
    cy.contains("button", "Confirm")
      .click();
    cy.get("tbody tr")
      .should("have.length", 0)
  });

  it("Rename code file ", () => {
    //Insert a simple template and go to templates page
    cy.insertCode(ADefaultCssCodeFile)
    cy.reload();
    cy.clickLink("Code")    
    cy.contains("td span", "Default.css")
      .click();

    //Open template for editing and rename, then click outside to close
    cy.contains("[data-test=dialog] .si-editable-text span", "Default.css")
      .click()
      .type("A")
      .blur();    
    cy.get("body").click(0,0)

    //Verify new name
    cy.contains("td span", "Default.cssA")
  })
);


  