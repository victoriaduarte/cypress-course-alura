
Cypress.Commands.add('login', (user, password) => {
    cy.get('[data-test="loginUserName"]').type(user);
    cy.get('[data-test="loginPassword"]').type(password);
    cy.contains('button', 'login').click();
})
