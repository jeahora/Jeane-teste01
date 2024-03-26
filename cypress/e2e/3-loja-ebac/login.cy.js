/// <reference types="cypress"/>

describe('Funcionalidade: Login', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')  
    });

    afterEach(() => {
        cy.screenshot()
    });

    it('Deve Fazer Login com sucesso', () => { 
        cy.get('#username').type('jeane.teste@teste.com.br')
        cy.get('#password').type('Juan020817')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' , 'Olá, jeane.teste (não é jeane.teste? Sair)')  
    })

    it('Deve exibir uma mensagem de erro ao inserir usuário inválido', () => {      
        cy.get('#username').type('jey.teste@teste.com.br')
        cy.get('#password').type('Juan020817')
        cy.get('.woocommerce-form > .button').click()     
        cy.get('.woocommerce-error').should('exist')
    });

    it('Deve exibir uma mensagem de erro ao inserir senha inválida', () => {    
        cy.get('#username').type('jeane.teste@teste.com.br')
        cy.get('#password').type('teste000')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error > li').should('contain' , 'Erro: A senha fornecida para o e-mail jeane.teste@teste.com.br está incorreta. Perdeu a senha?')
        cy.get('.woocommerce-error').should('exist')

    })
})


