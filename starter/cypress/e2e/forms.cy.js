describe("Create Set Form", () => {
  beforeEach(() => {
    // The set form lives on the Card Sets view and starts collapsed.
    cy.visit("/");
    cy.get('[data-cy="nav-card-set"]').click();
  });

  it("happy path: successfully submits a valid card set name", () => {
    cy.get('[data-cy="toggle_form"]').click();
    cy.get('[data-cy="create-set-input"]').type("My Study Set");
    cy.get('[data-cy="create-set-submit"]').click();

    cy.contains("My Study Set").should("be.visible");
  });

  it("unhappy path: shows an error when submitting an empty set name", () => {
    cy.get('[data-cy="toggle_form"]').click();
    cy.get('[data-cy="create-set-submit"]').click();

    cy.get('[data-cy="form-error"]')
      .should("be.visible")
      .and("contain", "TITLE CANNOT BE EMPTY");
  });
});

describe("Add Card Form", () => {
  beforeEach(() => {
    // Create a fresh set first so the Add Card form is reachable.
    cy.visit("/");
    cy.get('[data-cy="nav-card-set"]').click();
    cy.get('[data-cy="toggle_form"]').click();
    cy.get('[data-cy="create-set-input"]').type("Test Set");
    cy.get('[data-cy="create-set-submit"]').click();
    cy.get('[data-cy="set-card-5"]').click();
    cy.get('[data-cy="toggle_form"]').click();
  });

  it("happy path: successfully adds a card with front and back text", () => {
    cy.get('[data-cy="card-front-input"]').type("Question");
    cy.get('[data-cy="card-back-input"]').type("Answer");
    cy.get('[data-cy="add-card-submit"]').click();

    cy.contains("Question").should("be.visible");
  });

  it("unhappy path: shows an error when card front is empty", () => {
    cy.get('[data-cy="add-card-submit"]').click();

    cy.get('[data-cy="form-error"]')
      .should("be.visible")
      .and("contain", "TERM AND DESCRIPTION CANNOT BE EMPTY");
  });
});
