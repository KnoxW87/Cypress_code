describe('visual test studentPage', () => {
  beforeEach(() => {
    cy.visit('https://cms-lyart.vercel.app')
    cy.get('#menu > :nth-child(2) > :nth-child(1) > a').click()
  })

  it('visual testing merit student img', () => {
    cy.get('.content:first').should('be.visible')
    cy.get('.content:first').toMatchImageSnapshot()
  })

  it('visual testing Photos of the selected category', () => {
    cy.get('.main-content').should('be.visible')
    cy.get('.main-content').toMatchImageSnapshot()
  })
   
})