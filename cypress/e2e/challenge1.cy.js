describe('challenge 1, form auth', () => {
  it('logs in and logs out successfully', () => {
    cy.visit('https://the-internet.herokuapp.com/login');
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');
    cy.get('button[type="submit"]').click();

    // Verifikasi masuk ke halaman secure
    cy.url().should('include', '/secure');
    cy.get('a[href="/logout"]').should('be.visible');

    // Klik logout dan verifikasi kembali ke halaman login
    cy.get('a[href="/logout"]').click();
    cy.url().should('include', '/login');
  })
})