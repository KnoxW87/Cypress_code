// untitled.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test


describe('Navi bar', () =>  {
  it('Links should work', () => {
    cy.visit('https://cms-lyart.vercel.app')
    cy.get('#menu a[href*="events"]:first').click()
    cy.url().should('contain', '/events')
  })

  it('logo can go back to home page', () => {
    cy.visit('https://cms-lyart.vercel.app/events')
    cy.get('#logo').click()
    cy.url().should('contain', 'vercel.app')
  })
})