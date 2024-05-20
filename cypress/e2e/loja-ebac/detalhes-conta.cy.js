///<reference types="cypress" />

describe('Funcionalidade: detalhes da conta', () => {

    beforeEach(() => {
      cy.visit('minha-conta/edit-account/') 
      cy.fixture('perfil').then(login => {
        cy.login(login.usuario, login.senha)  
      })
      
    });
 
    it('Deve completar detalhes da conta com sucesso', () => {
        cy.detalhesConta('Jeane', 'Hora', 'jeane.qa')
        cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.')
    });

});