
describe('home page', ()=>{
    it('WES2006 deve estar on line',()=>{
        cy.viewport(1440,900)
        cy.visit('http://mga-apl006/AppWeaverQUALIDADEAGHOM/login.aspx')
        cy.get('div[class="bx_hdr"]').should('have.text','\nIdentificação\n')

        cy.get('input[type= "text"][name="pu"]').type("qualidade")
        cy.get('input[type= "password"][name="pp"]').type("benner123")
        cy.get('input[type="submit"][value="Entrar"]').click()

        cy.get('a[href="authentication.aspx?cmd=logoff"]').should('have.text','Logoff')

        cy.get('a[href="authentication.aspx?cmd=logoff"]').click()

    })
})
