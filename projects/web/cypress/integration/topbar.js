/// <reference types="cypress" />

import { getFullUrl } from '../support/helpers';

describe('Home', () => {
  beforeEach(() => {
    cy.visit('/');
  });

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

  describe('Language switch', () => {
    it('select portuguese', () => {
      cy.findByTestId('language-menu').click({ force: true });
      cy.findByTestId('language__portuguese').click({ force: true });

      cy.get('html').should('have.attr', 'lang', 'pt');
      cy.findByTestId('author__description').contains(
        'Desenvolvedor, escritor nas horas vagas, viciado em tecnologia, amante do open-source e acredita que transformação de vida só acontece com educação.',
      );
    });

    it('select english', () => {
      cy.findByTestId('language-menu').click({ force: true });
      cy.findByTestId('language__english').click({ force: true });

      cy.get('html').should('have.attr', 'lang', 'en');
      cy.findByTestId('author__description').contains(
        'Developer, writer in my spare time, tech addicted, open-source lover who believes the only way to transform lives is through education.',
      );
    });
  });

  it('Opens side Bar', () => {
    cy.findByTestId('side-menu-button').click();
    cy.findByTestId('sideMenu').should('exist');
  });
});
