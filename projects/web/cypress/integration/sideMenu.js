describe('Home', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('home link redirects to "/"', () => {
    cy.findByTestId('side-menu-button').click();
    cy.findByTestId('side-menu-home-link').click();

    cy.location('pathname').should('equal', '/');
  });

  it('search link redirects to "/search"', () => {
    cy.findByTestId('side-menu-button').click();
    cy.findByTestId('side-menu-search-link').click();

    cy.location('pathname').should('equal', '/search');
  });

  it('uses link redirects to "/uses"', () => {
    cy.findByTestId('side-menu-button').click();
    cy.findByTestId('side-menu-uses-link').click();

    cy.location('pathname').should('equal', '/uses');
  });

  it('curriculum link redirects to "/cv"', () => {
    cy.findByTestId('side-menu-button').click();
    cy.findByTestId('side-menu-cv-link').click();

    cy.location('pathname').should('equal', '/cv');
  });
});
