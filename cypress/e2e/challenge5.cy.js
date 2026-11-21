describe('Challenge 5: Drag and Drop', () => {
  it('drags box A onto box B and swaps them', () => {
    cy.visit('https://the-internet.herokuapp.com/drag_and_drop');

    const dataTransfer = new DataTransfer();

    cy.get('#column-a').trigger('dragstart', { dataTransfer });
    cy.get('#column-b').trigger('drop', { dataTransfer });

    // Verifikasi posisi teks header tertukar
    cy.get('#column-a header').should('have.text', 'B');
    cy.get('#column-b header').should('have.text', 'A');
  });
});