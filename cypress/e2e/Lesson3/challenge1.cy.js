describe('Lesson 3 - Challenge 1: Update Data via API', () => {
  it('updates an existing post using PUT and verifies the updated data', () => {
    const updatedPost = {
      id: 1,
      title: 'Updated Post Title via Cypress',
      body: 'This post content has been updated using PUT request.',
      userId: 1,
    };

    cy.request('PUT', 'https://jsonplaceholder.typicode.com/posts/1', updatedPost)
      .should((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.id).to.eq(1);
        expect(response.body.title).to.eq(updatedPost.title);
        expect(response.body.body).to.eq(updatedPost.body);
      });
  });

  it('partially updates a post title using PATCH', () => {
    cy.request('PATCH', 'https://jsonplaceholder.typicode.com/posts/1', {
      title: 'Patched Title Only',
    }).should((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.title).to.eq('Patched Title Only');
    });
  });
});