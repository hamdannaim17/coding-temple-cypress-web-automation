describe('Lesson 3 - Challenge 2: Delete Data via API', () => {
  it('deletes a post and verifies the deletion response', () => {
    cy.request('DELETE', 'https://jsonplaceholder.typicode.com/posts/1')
      .should((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.be.empty;
      });
  });
});