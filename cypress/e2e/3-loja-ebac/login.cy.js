/// <reference types="cypress"/>

describe('Funcionalidade: Login',() =>{

    it('Deve Fazer Login com sucesso', () =>{
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.get('#username').type('jeane.teste@teste.com.br')
        cy.get('#password').type('Juan020817')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' , 'Olá, jeane.teste (não é jeane.teste? Sair)')

    })


})


