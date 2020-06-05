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

Cypress.Commands.add("insertFiles", (files) => {
  cy.window().then(async (window) => {
    await Promise.all(files.map(async(file) => await window.journalTest.files.add(file, file.id));
  });
});

Cypress.Commands.add("clearCodeDb", (selector) => {
  cy.window().then(async (window) => {
    await window.journalTest.code.clear();
  });
});

Cypress.Commands.add("clearMediaDb", (selector) => {
  cy.window().then(async (window) => {
    await window.journalTest.media.clear();
  });
});

Cypress.Commands.add("resetSettings", (selector) => {
  cy.window().then(async (window) => {
    await window.journalTest.settings.update(1, {
      id: 1,
      siteName: "Journal",
      wikiPageWidth: 800,
      showImageProperties: false,
    })
  });
});

Cypress.Commands.add("clearDb", (selector) => {
  cy.clearFilesDb();
  cy.clearCodeDb();
  cy.clearMediaDb();
  cy.resetSettings();
});

Cypress.Commands.add("insertCode", (code) => {
  cy.window().then(async (window) => {
    await window.journalTest.code.add(code, code.id)
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

Cypress.Commands.add("dropFile", (fixture, selector, type = "image/png") => {
  const dropEvent = {
    dataTransfer: {
        files: [
        ],
    },
  };
  cy.fixture(fixture).then((file) => {
    if (type === "image/png") {
      return Cypress.Blob.base64StringToBlob(file, type).then((blob) => {
        dropEvent.dataTransfer.files.push(blob);
      });
    } else {
      return Cypress.Blob.binaryStringToBlob(file, type).then((blob) => {
        dropEvent.dataTransfer.files.push(blob);
    });
    }
    
  });
  
  cy.get(selector).trigger('drop', dropEvent);
})



