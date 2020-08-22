/// <reference types="cypress" />

describe('Home', () => {
  before(() => {
    cy.visit('/');
  });

  it('it renders in english by default', () => {
    cy.get('html').should('have.attr', 'lang', 'en');
    cy.findByTestId('author__description').contains(
      'Developer, writer in my spare time, tech addicted, open-source lover who believes the only way to transform lives is through education.',
    );
  });

  describe('Posts', () => {
    it('renders posts', () => {
      cy.findAllByTestId('post-card').should('have.length.above', 0);
    });
  });

  describe('Author', () => {
    it('renders author name', () => {
      cy.findByTestId('author__name').should('contain', 'Raul Melo');
    });

    it('renders author photo', () => {
      cy.get('.gatsby-image-wrapper picture').should('exist');
    });

    it('opens github profile', () => {
      const el = cy.findByTestId('author__githubUrl');

      el.should('exist');
      el.should('have.attr', 'href', 'https://github.com/raulfdm/');
    });

    it('opens twitter profile', () => {
      const el = cy.findByTestId('author__twitterUrl');

      el.should('exist');
      el.should('have.attr', 'href', 'https://twitter.com/raul_fdm');
    });

    it('opens linkedIn profile', () => {
      const el = cy.findByTestId('author__linkedInUrl');

      el.should('exist');
      el.should('have.attr', 'href', 'https://www.linkedin.com/in/raulfdm/');
    });
  });

  describe('Post Filters', () => {
    it('renders all 3 options', () => {
      cy.get('[data-testid="postFilter__all"] > p').should('contain', 'Latest');

      cy.get('[data-testid="postFilter__single"] > p').should(
        'contain',
        'Single posts',
      );

      cy.get('[data-testid="postFilter__series"] > p').should(
        'contain',
        'Series',
      );
    });

    it('opens latest by default', () => {
      cy.get('[data-testid="postFilter__all"] > p').should(
        'have.class',
        'active',
      );
    });

    it('opens single posts when clicked', () => {
      cy.get('[data-testid="postFilter__single"]').click();

      cy.get('[data-testid="postFilter__single"] > p').should(
        'have.class',
        'active',
      );
    });

    it('opens series posts when clicked', () => {
      cy.get('[data-testid="postFilter__series"]').click();

      cy.get('[data-testid="postFilter__series"] > p').should(
        'have.class',
        'active',
      );
    });
  });
});
