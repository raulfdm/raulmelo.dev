/// <reference types="cypress" />

import { getFullUrl } from '../support/helpers';

describe('Home', () => {
  beforeEach(() => {
    cy.visit('/');
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

    describe('side bar navigation', () => {
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
