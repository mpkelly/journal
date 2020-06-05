/// <reference types="cypress" />
import {ACollection, ATemplate} from "../../../cypress/fixtures/Fixtures"

context("Settings Page", () => {
  beforeEach(() => {
    cy.visit("./tests/index.html");
    cy.clearDb();    
  });

  it("Backup and restore", () => {
    //Drop backup file and confirm import
    cy.clickLink("Settings")
    cy.dropFile('journal-backup.jbf', "[data-backup-dropzone]", "application/json")
    cy.contains("button", "Confirm").click();
    
    //Confirm content
    cy.contains("span", "New collection 1");
    cy.contains("span", "New item 3");

    cy.clickLink("New item 3")
    cy.get("#wikieditor")

    cy.clickLink("Images")
    cy.get("main img").should("have.length", 1)
  })
);


  