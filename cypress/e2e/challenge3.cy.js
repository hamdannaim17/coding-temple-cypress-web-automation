describe('Challenge 3: Dynamic Controls', () => {
  it('removes/adds checkbox and enables input field', () => {
    cy.visit('https://the-internet.herokuapp.com/dynamic_controls');

    // 1. Hapus checkbox
    cy.contains('button', 'Remove').click();
    cy.get('#checkbox', { timeout: 10000 }).should('not.exist');
    cy.get('#message').should('contain', "It's gone!");

    // 2. Tambahkan kembali checkbox
    cy.contains('button', 'Add').click();
    cy.get('#checkbox', { timeout: 10000 }).should('be.visible');

    // 3. Aktifkan input field dan ketik teks
    cy.contains('button', 'Enable').click();
    cy.get('#input-example input', { timeout: 10000 })
      .should('be.enabled')
      .type('Belajar Cypress Selesai!');
  });
});