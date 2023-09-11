const el = require('./elements').ELEMENTS;

class Register {
    accessRegisterPage(){
        cy.visit('http://localhost:4200/');
        cy.get(el.registerNow).click();
    }

    fillOutTheForm(){
        cy.get(el.email).type(user.email);
        cy.get(el.fullName).type(user.fullName);
        cy.get(el.registerUserName).type(user.userName);
        cy.get(el.registerPassword).type(user.password);
    }

    submitRegister(){
        cy.get(el.btnRegister).click();
    }
}

export default new Cadastro();