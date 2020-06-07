/// <reference types="cypress" />

import { getFullUrl } from '../support/helpers';

describe('Home', () => {
  beforeEach(() => {
    cy.visit(getFullUrl());
  });

  describe('Menu Bar', () => {
    it('renders', () => {
      cy.findByTestId('menu-bar').should('exist');
    });

    it('renders logo link with href "/"', () => {
      const logoEl = cy.findByTestId('menu-bar__logo');

      logoEl.should('exist');
      logoEl.find('svg').should('exist');
      logoEl.click();

      cy.url().should('eq', getFullUrl());
    });

    it('Includes CV page link which redirects to "/cv"', () => {
      cy.findByTestId('menu-bar__cv').click();

      cy.url().should('include', '/cv');
    });

    it('Includes search icon which redirects to "/search"', () => {
      cy.findByTestId('menu-bar__search').click();

      cy.url().should('include', '/search');
    });

    describe('Theme Switcher', () => {
      it('renders in the page', () => {
        const themeSwitchEl = cy.findByTestId('theme-switch');
        themeSwitchEl.should('exist');
      });

      it('toggle between dark and light when clicked', () => {
        cy.get('body').should('have.class', 'light');

        cy.findByTestId('theme-switch').click();
        cy.get('body').should('have.class', 'dark');

        cy.findByTestId('theme-switch').click();
        cy.get('body').should('have.class', 'light');
      });
    });

    describe.skip('Language switch', () => {
      it('select portuguese', () => {});
      it('select english', () => {});
    });

    describe.skip('Author presentation', () => {
      it('renders author name', () => {});
      it('renders author photo', () => {});
      it('opens github profile', () => {});
      it('opens twitter profile', () => {});
      it('opens linkedin profile', () => {});
    });

    describe.skip('Panels', () => {
      it('opens latest by default', () => {});
      it('opens single posts when clicked', () => {});
      it('opens series posts when clicked', () => {});
    });
  });

  it('renders 5 posts', () => {
    cy.findAllByTestId('post-card').should('have.length', 5);
  });
});
