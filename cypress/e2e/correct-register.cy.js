describe('Register page', () => {
  it('Fill out form fields correctly to register a new user', () => {
    cy.visit('http://localhost:4200/#/home')
    cy.contains('a', 'Register now').click();
    cy.get('[data-test="email"]').type('victoria@email.com.br');
    cy.get('[data-test="fullName"]').type('Victória Regina Duarte');
    cy.get('[data-test="registerUserName"]').type('victoriaduarte');
    cy.get('[data-test="registerPassword"]').type('Victoria123');
    cy.contains('button', 'Register').click();
  })
})