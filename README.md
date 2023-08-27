# Cypress Course - Alura

### Learnings

**Installing**
- Node
    - Download nvm-windows setup
    - Run `nvm install 16.13.1` command
    - Run `nvm use 16.13.1` command
    - Verify installation `node --version`
- Cypress
    - Run `npm install cypress --save-dev` command
- Project ("Alura Pic")
    - Download the project
    - Run `npm install` command in the project folder
    - Run the project locally `npm start`
    - Open the browser on `http://localhost:4200/`
    
**Running**
- Open Cypress: `npx cypress open`
or
- Run Cypress (headless mode): `npx cypress run`

**Tests**
- Create tests (<*test-name*>.cy.js) under `cypress\e2e` folder
- Basic Commands:
    - cy.visit('<*url*>')
    - cy.get('[<*element-locator*>]').click();
    - cy.get('[<*element-locator*>]').type();
    -  cy.contains('<*text*>').should('be.visible');
