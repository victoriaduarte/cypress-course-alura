describe('Login page', () => {
  it('Fill out form fields correctly to login', () => {
    cy.visit('http://localhost:4200/#/home')
    cy.get('[data-test="loginUserName"]').type('victoriaduarte');
    cy.get('[data-test="loginPassword"]').type('Victoria123');
    cy.contains('button', 'login').click();
  })
})