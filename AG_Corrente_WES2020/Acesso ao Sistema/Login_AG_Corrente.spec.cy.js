describe('Validar Acesso e Logoff - Teste branch via VSCode - Teste 1 Git Bash', () => {

    //Acessar AGWEB (AG_CORRENTE)
    it('Preencher Campo: "Usuário"', () => {
        cy.visit('http://mga-apl006/WebAppQUALIDADEAGCORRENTE/Login.aspx')                
        cy.get('#UserName').type('automacao').should('be.visible')
        cy.get('#Password').type('sup01').should('be.visible')
        cy.get('#LoginButton').click().should('be.visible')
        }) 

})