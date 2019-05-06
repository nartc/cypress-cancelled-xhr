describe('Cancelled XHR', () => {
    beforeEach(() => {
        cy.visit('http://localhost:4200');
        cy.wait(999);
        cy.visit('http://localhost:4200/todos');
    });

    it('should cancel', () => {
        expect(true).to.be.true;
    });
});
