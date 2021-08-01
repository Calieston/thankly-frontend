/// <reference types="cypress" />
import Chance from "chance";
const chance = new Chance();

describe("Thankly Backoffice", () => {
  const question = "How do you feel today?";

  // beforeEach(() => {
  //   cy.visit("http://localhost:4200");
  // });

  it("has a title", () => {
    cy.visit("http://localhost:4200");
    cy.contains("Thankly");
  });

  it("create a new question", () => {
    
    cy.visit("http://localhost:4200/question-list");

    cy.get('[data-testid=new-question]').click();

    cy.url().should("include", "question-create");

    cy.get("input[name=question]").type(question);
    cy.get("input[type=submit]").click();

    cy.url().should("include", "question-list");
  });

  it("delete a question", () => {
    cy.visit("http://localhost:4200/question-list");

    cy.get("#delete-question").click();

    cy.url().should("include", "question-list");

  });

});
