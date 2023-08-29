describe('Login page', () => {

  beforeEach(() => {
    cy.visit('http://localhost:4200/#/home') })

  it('Fill out form fields correctly to login', () => {
    cy.login('victoriaduarte','Victoria123')
  })
})