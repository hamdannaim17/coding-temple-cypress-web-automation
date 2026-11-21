describe('Challenge 6: Floating Menu', () => {
  it('keeps floating menu visible on scroll and navigates sections', () => {
    cy.visit('https://the-internet.herokuapp.com/floating_menu');

    // Scroll ke bawah halaman
    cy.scrollTo('bottom');
    cy.get('#menu').should('be.visible');

    // Klik setiap item menu dan verifikasi hash URL
    const menuItems = ['Home', 'News', 'Contact', 'About'];
    menuItems.forEach((item) => {
      cy.contains('#menu a', item).click();
      cy.url().should('include', `#${item.toLowerCase()}`);
    });
  });
});