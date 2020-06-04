// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.Commands.add("clearFilesDb", (selector) => {
  cy.window().then(async (window) => {
    await window.journalTest.files.clear();
  });
});

Cypress.Commands.add("clickButton", (name) => {
  cy.get(`[data-test=${name}]`).click();
});

Cypress.Commands.add("clickMenuItem", (text) => {
  cy.get(".si-menu-item").contains(text).click();
});

Cypress.Commands.add("clickLink", (text, parent = "") => {
  cy.get(`${parent} a`).contains(text).click();
});
