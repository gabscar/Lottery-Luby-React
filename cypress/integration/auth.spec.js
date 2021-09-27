//<reference types="cypress" />


describe("TGL Web authentication",()=>{
    
    it.skip('Realização de cadastro',()=>{
        cy.visit("http://localhost:3001/register");

        cy.get('#name').type("Gabriel Santana de Carvallho");
        cy.get('#email').type("teste@mail.com");
        cy.get('#password').type("123456");
        cy.get('form > div > button').click();
    });

    it("realiza login",()=>{
        cy.visit("http://localhost:3001/login");

        cy.get('#email').type('teste@mail.com');
        cy.get('#password').type('123456');
        cy.get('form > div > button').click();
    })
})