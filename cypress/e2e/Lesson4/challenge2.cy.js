describe('Lesson 4 - Challenge 2: Accessibility Testing with axe-core', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/dynamic_controls');
    cy.injectAxe();
  });

  it('detects accessibility issues on initial page load', () => {
    // Membiarkan assertion default agar pelanggaran a11y terlihat jelas sebagai temuan audit
    cy.checkA11y();
  });

  it('detects accessibility issues after dynamic input is enabled', () => {
    cy.contains('button', 'Enable').click();
    cy.get('#input-example input', { timeout: 10000 }).should('be.enabled');

    // Memeriksa kembali setelah konten dinamis berubah
    cy.checkA11y();
  });
});