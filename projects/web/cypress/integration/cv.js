/// <reference types="cypress" />

describe('CV', () => {
  it('Should match previous screenshot "CV"', () => {
    cy.visit('/cv');
    cy.findByTestId('cvContent').then(() => {
      cy.matchImageSnapshot();
    });
  });
});
