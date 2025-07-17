Cypress.on('uncaught:exception', (err) => {
  if (
    err.message.includes('Hydration failed') ||
    err.message.includes('There was an error while hydrating') ||
    err.message.includes('the entire root will switch to client rendering')
  ) {
    console.log(err.message);
    return false; // Prevent Cypress from failing the test
  }
  return true; // Fail for other unexpected errors
});

context('Example Acceptance Tests', () => {
  describe('Visit a page', () => {
    beforeEach(() => {
      // Given a logged in editor
      cy.viewport('macbook-16');
      cy.createContent({
        contentType: 'Document',
        contentId: 'document',
        contentTitle: 'Test document',
      });
      cy.autologin();
      cy.intercept('GET', '/*/document').as('content');
      cy.visit('/');
    });

    it('As editor I can add edit a Page', function () {
      cy.navigate('/document/edit');
      cy.wait(500);
      cy.get('#toolbar-save').click();
    });
  });
});
