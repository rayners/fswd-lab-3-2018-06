describe('adding a task', function () {
    it('should add a task', function() {
        cy.server();
        cy.route('/tasks', [ { id: 1, name: 'Task goes here', completedAt: new Date() }]);
        cy.visit('/#/tasks');
        cy.get('#tasks-1 a').click();
        cy.get('.task-name').should('have.text', 'Task goes here');
        cy.get('.task-status').should('have.text', 'Completed');
    });
    
    it('should handle failing to add a task', function() {
        cy.server();
        cy.route('/tasks', []);
        cy.visit('/#/tasks');
        cy.route({
            method: 'POST',
            url: '/tasks',
            status: 500,
            delay: 2000,
            response: {}
        }).as('failedAdd');
        cy.get('input').type('My new task!');
        cy.get('button').click();
        cy.get('#tasks--1').should('contain', 'My new task!');
        cy.wait('@failedAdd');
        cy.get('#tasks--1').should('not.be.visible');
    });
})