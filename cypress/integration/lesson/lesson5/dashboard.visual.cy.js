describe('visual test dashboard', () => {
  beforeEach(() => {
    cy.visit('https://cms-lyart.vercel.app')
    cy.get('#menu a').contains('Sign in').click()
    cy.get('#login_role > :nth-child(3)').click()
    cy.get('#login_email').type('manager@admin.com')
    cy.get('#login_password').type('111111')
    cy.get('.ant-btn > span').click()
    cy.wait(1000)
  })

  it('header', () => {
    cy.get('.ant-layout-header').should('be.visible')
    cy.get('.ant-layout-header').toMatchImageSnapshot()
  })

  it.only('sider', () => {
    cy.get('.ant-layout-sider').should('be.visible')
    cy.get('.ant-layout-sider').toMatchImageSnapshot()
  })
})