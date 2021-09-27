

describe("TGL Web create Games",()=>{
    
    it('Criar uma aposta da Mega-Sena de forma aleatória usando randle game',()=>{
       cy.login();
       cy.get('#Mega-Sena').click();
       cy.get('#handle_completeGame').click();
       cy.get('#handle_addGameInCart').click();
    });

    it('Criar uma aposta da Mega-Sena de forma aleatória adcionando números manualmente',()=>{
        cy.get('#Mega-Sena').click();

        cy.get(':nth-child(38)').click();
        cy.get('.buttons_numbers > :nth-child(7)').click();
        cy.get(':nth-child(31)').click();
        cy.get(':nth-child(55)').click();
        cy.get('#handle_addGameInCart').click();
    });

    it('Salva game com falha',()=>{
        cy.get('.save-btn').click();
        cy.get('.Toastify__toast-body > :nth-child(2)').should('have.text','O valor mínimo de compras é de R$ 30,00');
        cy.get('.Toastify__close-button > svg').click();
    });

    it('Salva game com Sucesso',()=>{
        cy.get('#handle_completeGame').click();
        cy.get('#handle_addGameInCart').click();
        cy.get('#handle_completeGame').click();
        cy.get('#handle_addGameInCart').click();
        cy.get('#handle_completeGame').click();
        cy.get('#handle_addGameInCart').click();
        cy.get('#handle_completeGame').click();
        cy.get('#handle_addGameInCart').click();
        cy.get('#handle_completeGame').click();
        cy.get('#handle_addGameInCart').click();
        cy.get('.save-btn').click();
        cy.get('.Toastify__toast-body > :nth-child(2)').should('have.text','Jogos comprados com sucesso, boa sorte');
    })

    
})