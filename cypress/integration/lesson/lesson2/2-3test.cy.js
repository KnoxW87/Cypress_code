describe('Navi bar', () =>  {
  it('Header should always in top of page', () => {
    cy.visit('https://cms-lyart.vercel.app')
    cy.scrollTo('bottom')
    cy.get('#header').should('be.visible')
  })

  it('Header should always in top of page', () => {
    cy.visit('https://cms-lyart.vercel.app')
    cy.scrollTo('center')
    cy.get('#header').should('be.visible')
  })
})