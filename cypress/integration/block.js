context('Block Acceptance Tests', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.viewport('macbook-16');
    cy.createContent({
      contentType: 'Document',
      contentId: 'document',
      contentTitle: 'Document',
      path: '/',
    });
    cy.autologin();
  });

  it('As editor I can add a Carousel block', () => {
    // Adding Document
    cy.createContent({
      contentType: 'Document',
      contentId: 'my-page',
      contentTitle: 'My Page',
      path: '/document',
    });
    // Adding Image
    cy.createContent({
      contentType: 'Image',
      contentId: 'my-image',
      contentTitle: 'My Image',
      path: '/document',
    });

    cy.visit('/document/edit');
    cy.get('.block .slate-editor [contenteditable=true]').click();
    cy.get('.button .block-add-button').click({ force: true });
    cy.findByLabelText('Unfold Teasers blocks').click();
    cy.get('.button.carousel').click();
    cy.findByText('Add item').click();
    cy.get(
      '.objectbrowser-field[aria-labelledby="fieldset-default-field-label-href-0-columns-0"] button[aria-label="Open object browser"]',
    ).click();
    cy.findByLabelText('Select My Page').click();
    cy.get(
      '.objectbrowser-field[aria-labelledby="fieldset-default-field-label-preview_image-3-columns-0"] button[aria-label="Open object browser"]',
    ).click();
    cy.findByLabelText('Select My Image').dblclick();
    cy.get('#toolbar-save').click();

    // then we should see My Page text and image should have src attribute
    cy.findAllByText('My Page').should('exist');
    cy.get('.grid-teaser-item.top img')
      .should('have.attr', 'src')
      .and('include', '/my-image/@@images/image/teaser');
  });
}
