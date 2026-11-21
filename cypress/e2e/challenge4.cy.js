describe('Challenge 4: JavaScript Alerts', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/javascript_alerts');
  });

  it('handles JS Alert', () => {
    cy.contains('button', 'Click for JS Alert').click();
    cy.get('#result').should('have.text', 'You successfully clicked an alert');
  });

  it('accepts JS Confirm', () => {
    cy.contains('button', 'Click for JS Confirm').click();
    cy.get('#result').should('have.text', 'You clicked: Ok');
  });

  it('dismisses JS Confirm', () => {
    cy.on('window:confirm', () => false);
    cy.contains('button', 'Click for JS Confirm').click();
    cy.get('#result').should('have.text', 'You clicked: Cancel');
  });

  it('handles JS Prompt', () => {
    cy.window().then((win) => {
      cy.stub(win, 'prompt').returns('Halo dari Cypress');
    });
    cy.contains('button', 'Click for JS Prompt').click();
    cy.get('#result').should('have.text', 'You entered: Halo dari Cypress');
  });
});