describe('Register page', () => {
  it('Fill out form fields incorrectly', () => {
    cy.visit('http://localhost:4200/#/home')
    cy.get('[data-test="register"]').click();
    cy.get('[data-test="btnRegister"]').click();
    cy.get('[data-test="btnRegister"]').click();
    cy.contains('Email is required!').should('be.visible');
    cy.contains('Full name is required!').should('be.visible');
    cy.contains('User name is required!').should('be.visible');
    cy.contains('Password is required!').should('be.visible');
  })
})