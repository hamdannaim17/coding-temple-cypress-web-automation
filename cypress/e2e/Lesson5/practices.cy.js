describe('Lesson 5: Cypress Best Practices', () => {
  beforeEach(function () {
    // Step 3: Muat data uji dari folder fixtures
    cy.fixture('loginUser').as('userData');
  });

  // Step 1, 4, 5 & 6: Atomic test, direct assertions, dan custom command
  it('logs in cleanly using fixture data and custom command', function () {
    cy.loginToHerokuApp(this.userData.username, this.userData.password);

    cy.url().should('include', '/secure');
    cy.contains('h2', 'Secure Area').should('be.visible');
    cy.get('a[href="/logout"]').should('be.visible');
  });

  // Step 7: Pengujian pada berbagai ukuran layar (Viewport)
  it('renders login page properly on mobile and desktop viewports', function () {
    // Simulasi layar mobile (iPhone 6)
    cy.viewport('iphone-6');
    cy.visit('https://the-internet.herokuapp.com/login');
    cy.get('form#login').should('be.visible');
    cy.get('button[type="submit"]').should('be.visible');

    // Simulasi layar desktop
    cy.viewport(1280, 720);
    cy.get('form#login').should('be.visible');
  });
});