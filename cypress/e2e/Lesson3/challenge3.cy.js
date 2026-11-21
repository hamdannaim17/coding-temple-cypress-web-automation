describe('Lesson 3 - Challenge 3: Setup State via API Before UI Tests', () => {
  let fetchedTodos = [];

  beforeEach(() => {
    // 1. Ambil / siapkan data awal dari API sebelum membuka UI
    cy.request('GET', 'https://jsonplaceholder.typicode.com/todos?_limit=2')
      .then((response) => {
        expect(response.status).to.eq(200);
        fetchedTodos = response.body;
      });

    // 2. Buka halaman UI Todo app
    cy.visit('https://example.cypress.io/todo');
  });

  it('populates UI todo list using state fetched from API and verifies interactions', () => {
    // Tambahkan item dari hasil API ke dalam UI
    fetchedTodos.forEach((todo) => {
      cy.get('.new-todo').type(`${todo.title}{enter}`);
    });

    // Verifikasi item baru muncul di UI (2 item bawaan + 2 item dari API = 4 item)
    cy.get('.todo-list li').should('have.length', 4);
    cy.get('.todo-list li').eq(2).should('contain.text', fetchedTodos[0].title);
    cy.get('.todo-list li').eq(3).should('contain.text', fetchedTodos[1].title);

    // Tandai salah satu item dari API sebagai selesai (completed) di UI
    cy.get('.todo-list li').eq(2).find('.toggle').check();
    cy.get('.todo-list li').eq(2).should('have.class', 'completed');
  });
});