describe('Register page', () => {

  beforeEach(() => {
    cy.visit('http://localhost:4200/#/home')
  })

  const users = require('../fixtures/users.json')
  users.forEach(user => {
    it('Fill out form fields correctly to register a new user', () => {
      cy.visit('http://localhost:4200/#/home')
      cy.contains('a', 'Register now').click();
      cy.get('[data-test="email"]').type(user.email);
      cy.get('[data-test="fullName"]').type(user.fullName);
      cy.get('[data-test="registerUserName"]').type(user.userName);
      cy.get('[data-test="registerPassword"]').type(user.password);
      cy.contains('button', 'Register').click();
    })
  })
})