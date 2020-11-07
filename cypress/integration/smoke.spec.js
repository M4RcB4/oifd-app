describe('Smoke Test', () => {
    it('can view the home page', () => {
      cy.visit('/');
      cy.url().should('include', 'http://localhost:3000/');
      cy.contains('Learn React');
    });
  });