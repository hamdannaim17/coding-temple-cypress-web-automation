describe('GET /posts', () => { it('should return a list of posts', () => { cy.request('https://jsonplaceholder.typicode.com/posts') 
		.should((response) => { 
			expect(response.status).to.eq(200); 
			expect(response.body).to.have.length(100);
			expect(response.body[0]).to.have.property('title'); 
				}); 
			}); 
		});
describe('POST /posts', () => { 
    it('should create a new post', () => { 
        cy.request('POST', 'https://jsonplaceholder.typicode.com/posts', { 
            userId: 1, 
            title: 'New Post', 
            body: 'This is a new post.' 
        }).should((response) => { 
            expect(response.status).to.eq(201); 
            expect(response.body).to.have.property('id'); 
		}); 
	}); 
});


  