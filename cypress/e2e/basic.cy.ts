describe("initial test", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("displays the welcome component", () => {
    cy.get("h1").contains("Hola!");
  });
});
