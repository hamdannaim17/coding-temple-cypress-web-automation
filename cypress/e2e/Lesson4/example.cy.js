describe('Lesson 4 - Challenge 1: Lighthouse Performance Audit', () => {
  it('audits page scores against thresholds', () => {
    cy.visit('https://the-internet.herokuapp.com/login');

    cy.lighthouse({
      performance: 50,
      accessibility: 70,
      'best-practices': 70,
      seo: 70,
    });
  });
});