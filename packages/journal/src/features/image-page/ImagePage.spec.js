/// <reference types="cypress" />


context("Image Page", () => {
  beforeEach(() => {
    cy.visit("./tests/index.html");
    cy.clearDb();   
    cy.reload() 
  });

  it("Upload, edit and search for image ", () => {

    //Drop image on dropzone and add tag
    const image2 = "image2";
    cy.dropFile('image1.png', "[data-image-dropzone]")
    cy.focused().type("tag1");
    cy.contains("button", "I'm done")
      .click();
    
    //Search for an unknown string to verify empty state
    cy.get("[data-test=image-search]").type("abc{enter}")
    cy.contains("div", "No Images Found")    
    cy.clickButton("clear-button");

    //Search for tag added above
    cy.get("[data-test=image-search]").type("tag1{enter}")
    cy.get("main img").should("have.length", 1);    
    cy.contains("span", "1 result")
    cy.clickButton("clear-button");

    //Open image preview and edit name and add new tag
    cy.get("main img")
      .click();
    cy.clickButton("edit-image");
    cy.get("[data-test=name-input]")
      .type("1")
    cy.get("[data-test=tag-input]")
      .type("tag2")
    cy.clickButton("close-preview");

    //Search for new tag
    cy.get("[data-test=image-search]")
      .type("tag2{enter}")
    cy.get("main img")
      .should("have.length", 1);
    cy.clickButton("clear-button");

    //Search by new name
    cy.get("[data-test=image-search]")
      .type("image1{enter}")
    cy.get("main img")
      .should("have.length", 1);
  })

);


  