describe('challenge 2, Hover Over', () => {
  it('displays user info on hover and navigates to profile', () => {
    cy.visit('https://the-internet.herokuapp.com/hovers');
    // Uji hover untuk tiap avatar (user 1, 2, 3)
    cy.get('.figure').each(($el, index) => {
      cy.wrap($el).find('.figcaption').invoke('show');
      cy.wrap($el).find('h5').should('be.visible').and('contain', `name: user${index + 1}`);
    });

    // Opsional: Klik link profil user pertama
    cy.get('.figure').first().find('.figcaption').invoke('show');
    cy.get('.figure').first().find('a').click();
    cy.url().should('include', '/users/1');
  })
})