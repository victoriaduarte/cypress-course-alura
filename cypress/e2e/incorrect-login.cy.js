describe('Login page', () => {

  beforeEach(() => {
    cy.visit('http://localhost:4200/#/home')

    cy.intercept('POST', 'http://localhost:3000/user/login', {
      statusCode: 400
    }).as('stubPost')

  })
    
    it('Verify required field validation messages', () => {
      cy.contains('User name is required!').should('be.visible');
      cy.contains('Password is required!').should('be.visible');
    })

    it('Should fail even if the fields are filled properly', () => {
      cy.login('victoriaduarte','Victoria123')
      cy.wait('@stubPost')
    })
})
