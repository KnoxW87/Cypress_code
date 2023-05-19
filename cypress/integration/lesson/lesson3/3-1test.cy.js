describe('Navi bar', () => {
  beforeEach(() => {
    cy.visit('https://cms-lyart.vercel.app')
  })

  it('sucess login', () => {
    cy.get('#menu a').contains('Sign in').click()
    cy.get('#login_email').type('student@admin.com')
    cy.get('#login_password').type('111111')
    cy.get('.ant-btn > span').click()
    cy.url().should('contain', '/dashboard/student')
  })

  it('type invalid emaill address and passwork will display reminder message', () => {
    cy.get('#menu a').contains('Sign in').click()
    cy.get('#login_email').type('manager')
    cy.get(':nth-child(2) > .ant-col > .ant-form-item-explain > div').should('contain', 'not a valid email')
    cy.get('#login_password').type('111')
    cy.get(':nth-child(3) > .ant-col > .ant-form-item-explain > div').should('contain', 'between 4 and 16 characters')
  })

  it('failed login will display message', () => {
    cy.get('#menu a').contains('Sign in').click()
    cy.get('#login_email').type('manager@admin.com')
    cy.get('#login_password').type('111111')
    cy.get('.ant-btn > span').click()
    cy.get('.ant-message-custom-content > :nth-child(2)').should('contain', 'Please check your password or email')
  })

  it('Complete sign up will display success message', () => {
    cy.get('#menu a').contains('Sign in').click()
    cy.get('.ant-space > :nth-child(2)').click()
    cy.get('.ant-radio-input').check()
    cy.get('#signUp_email').type('manager@admin.com')
    cy.get('#signUp_password').type('111111')
    cy.get('#signUp_confirmPassword').type('111111')
    cy.get('.ant-btn').click()
    cy.get('.ant-message-custom-content > span').should('contain', 'success')
  })

  it.only('display password after click eye botton in sign up feature', () => {
    cy.get('#menu a').contains('Sign in').click()
    cy.get('.ant-space > :nth-child(2)').click()
    cy.get('.ant-input-suffix').click({ multiple: true })
    cy.get('input[placeholder="please input password"]').should('have.attr', 'type', 'text')
  })

})