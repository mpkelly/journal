/// <reference types="cypress" />
import {ACollection, ATemplate} from "../../../cypress/fixtures/Fixtures"

context("Collections", () => {
  beforeEach(() => {
    cy.visit("./tests/index.html");
    cy.clearFilesDb();    
  });

  it("Create document from template ", () => {
    //Insert a simple template and go to templates page
    cy.insertFiles([ACollection, ATemplate])
    cy.clickLink("Templates")    
    cy.get("button").contains("Create").click();

    //Rename and add basic substitutions
    cy.get("[data-test=dialog] input").click().type("A")
    cy.get("button").contains("Next").click();
    cy.get("[data-test=dialog] input").should("have.length", 2);
    cy.get("[data-test=dialog] input").first().click().type("1")
    cy.get("[data-test=dialog] input").eq(1).type("2")
    cy.clickButton("create-template")
    
    //Check substitutions were applied
    cy.get("#documenteditor").contains("1 2 content 1");
  })
  

  it("Delete a template", () => {
    //Insert a simple template then delete it
    cy.insertFiles([ACollection, ATemplate])
    cy.clickLink("Templates")    
    cy.clickButton("template-menu")
    cy.clickMenuItem( "Delete");    
    cy.get("div").contains("No Templates")
    
  });
);


  