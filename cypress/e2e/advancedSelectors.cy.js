describe('Dynamic Loading', () => {
  it('waits for the hidden element to show', () => {
    cy.visit('https://the-internet.herokuapp.com/dynamic_loading/1');
    cy.get('#start button').click();
    cy.get('#finish h4', { timeout: 10000 })
      .should('be.visible')
      .and('contain', 'Hello World!');
  });
});