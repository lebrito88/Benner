describe('Validar Acesso e Logoff - AG_CORRENTE', () => {

    //Acessar AGWEB (AG_CORRENTE)
    it('Preencher Campo: "Usuário"', () => {
        //cy.visit('http://mga-apl006/WebAppQUALIDADEAGCORRENTE/Login.aspx')        
        cy.visit('http://mga-apl044/QCaixa_Corrente/login.aspx')        
        cy.get('#UserName').type('automacao').should('be.visible')
        cy.get('#Password').type('sup01').should('be.visible')
        cy.get('#LoginButton').click().should('be.visible')
        }) 

})