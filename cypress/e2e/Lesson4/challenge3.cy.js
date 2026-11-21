describe('Lesson 4 - Challenge 3: Combined Performance & Accessibility Audit', () => {
  it('audits key page elements, accessibility, and performance together', () => {
    cy.visit('https://the-internet.herokuapp.com/login');
    cy.injectAxe();

    // Verifikasi elemen utama halaman siap
    cy.get('form#login').should('be.visible');

    // Pemeriksaan aksesibilitas
    cy.checkA11y();

    // Jalankan jika cy.lighthouse sudah terdaftar di support & cypress.config
     cy.lighthouse({
       performance: 60,
       accessibility: 75,
       'best-practices': 75,
       seo: 75,
     });
  });
});