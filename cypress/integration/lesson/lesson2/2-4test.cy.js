describe('Navi bar', () => {
  beforeEach(() => {
    cy.visit('https://cms-lyart.vercel.app')
  })

  it('should show sign in if user is not logged in', () => {
    cy.get('a[href*="/login"]').should('be.visible')
  })

  
  it.only('should show dashboard if user is logged in', () => {
    cy.get('.header__SignIn-sc-19law7x-0 > a').click()
    cy.get('#login_email').type('student@admin.com')
    cy.get('#login_password').type('111111')
    cy.get('.ant-btn > span').click()
    cy.wait(2000)
    cy.get('.layout__Logo-sc-1dfhsq5-0 > span').click()
    cy.get('a[href*="/dashboard"]').should('be.visible')
  })
})
