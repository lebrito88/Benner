

describe('home page', ()=>{
    it('WES2020 deve estar on line',()=>{
        cy.viewport(1440,900)
        cy.visit('http://mga-apl006/WebAppQUALIDADEAGCORRENTE/Login.aspx')
        cy.get('h4[id="wesLogin_titlePage"]').should('have.text','Identifique-se')
        //cy.get('div[class="bx_hdr"]').should('have.text','\nIdentificação\n')

        
        //cy.get('[id="UserName"]').type("sysdba")
        cy.get('#UserName').type("sysdba")

        //cy.get('#UserName').type("sysdba").should('be.visible')

        //cy.get('[id="Password"]').type("24073944")
        cy.get('#Password').type("24073944")

        //cy.get('a[id="LoginButton"]').click()
        cy.get('#LoginButton').click()

        //cy.get('button[class="btn btn-icon-only btn-circle btn-sm usuario"]').click()
        //cy.get('a[href="Roles/Select/ROLE_SAUDE_NUCLEO_MBENEFICIAR"]').should('have.text','  Beneficiários')
        //cy.get('a[href="Roles/Select/ROLE_SAUDE_NUCLEO_MBENEFICIAR"]').click()

        cy.get(':nth-child(6) > .dropdown-toggle').click()
        cy.get('.dropdown-menu-list > :nth-child(4) > a').click()


        //cy.get('button[class="btn btn-icon-only btn-circle btn-sm usuario"]').click()
        //cy.get('a[id="ctl00_TopBar_Linkbuttonlogoff1"]').should('have.text',' Sair')
        //cy.get('a[id="ctl00_TopBar_Linkbuttonlogoff1"]').click()

        cy.get(':nth-child(6) > .dropdown-toggle').click()

        cy.get('#ctl00_TopBar_Linkbuttonlogoff1').click()

        //cy.get('a[href="authenticasion.aspx?cmd=logoff"]').should('have.text','Logoff')

        //cy.get('a[href="authentication.aspx?cmd=logoff"]').click()

    })
})