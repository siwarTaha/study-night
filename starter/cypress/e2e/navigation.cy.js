describe("Navigation", () => {
  beforeEach(() => {
    // Start each navigation spec from the app shell.
    cy.visit("/");
  });

  it('navigates to the Card Sets page when "Card Sets" is clicked', () => {
    cy.get('[data-cy="nav-card-set"]').click();
    cy.contains("Study Set Library").should("be.visible");
  });

  it('navigates to the About page when "About" is clicked', () => {
    cy.get('[data-cy="nav-about"]').click();
    cy.contains("About Study Night").should("be.visible");
  });

  it('navigates to the Home page when "Home" is clicked', () => {
    cy.get('[data-cy="nav-about"]').click();
    cy.get('[data-cy="nav-home"]').click();
    cy.contains("Study Night").should("be.visible");
  });
});
