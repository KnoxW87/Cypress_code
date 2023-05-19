describe('Navi bar', () =>  {
  it('Navi bar should have 5 link', () => {
    cy.visit('https://cms-lyart.vercel.app')
    cy.get('header a').should('have.length', 5);
  })
})