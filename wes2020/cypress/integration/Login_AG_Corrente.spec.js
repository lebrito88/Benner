describe('Digitar PEG de Consulta - AG_CORRENTE', () => {
    before(() => {
    //Acessar link da base da CABESP
        cy.viewport(1440,900)
        cy.visit('http://mga-apl006/WebAppQUALIDADEAGCORRENTE/Login.aspx')
        cy.get('h4[id="wesLogin_titlePage"]').should('have.text','Identifique-se')
    })
    it('Incluir PEG de Consulta',()=>{
        //Login e senha      
        cy.get('#UserName').type("sysdba")
        //cy.get('#UserName').type("sysdba").should('be.visible')      
        cy.get('#Password').type("24073944")        
        cy.get('#LoginButton').click()
    
        //Acessando papel (módulo) de Processmanto de CoOntas
        cy.get(':nth-child(6) > .dropdown-toggle').click()
        cy.get('.dropdown-menu-list > :nth-child(9) > a').click()

        cy.get('#ctl00_SidebarMenu > :nth-child(9) > :nth-child(1) > .title').click()

        cy.get('[style="display: block;"] > :nth-child(3) > .nav-link > .title').click()

        //cy.get('#ctl00_Main_WDG_V_SAM_COMPETPEG_778_PRINCIPAL_FilterControl_SearchField').click()
        cy.get('#ctl00_Main_WDG_V_SAM_COMPETPEG_778_PRINCIPAL_FilterControl_SearchField').type("2022")
        cy.get('#ctl00_Main_WDG_V_SAM_COMPETPEG_778_PRINCIPAL_FilterControl_SearchButton > .fa').click()
        cy.wait(1000)
        cy.get('td[data-field="COMPETENCIA"]').click()
        cy.wait(1000)
        cy.get('#portlet_WDG_V_SAM_COMPETPEG_778_LNK1 > .portlet-title > .caption > .caption-subject').click()
        cy.wait(1000)
        //cy.get('td[data-field="NOME"]').click()
        //cy.wait(1000)
        cy.get('tbody > tr > .text-left > a').click()

        cy.get('#portlet_WDG_V_FILIAIS_779_LNK1 > .portlet-title > .caption > .caption-subject').click()
        cy.get('#ctl00_Main_WDG_V_FILIAIS_779_LNK1_toolbar > .btn').click()
        cy.get('#ctl00_Main_WDG_V_SAM_PEG_1465_PRINCIPAL_PageControl_PRINCIPAL_PRINCIPAL_DATARECEBIMENTO_DATE').click()
        cy.contains('Hoje').click()

        cy.get(':nth-child(10) > .form-group > :nth-child(2) > .input-group > .select2 > .selection > .select2-selection').click()
        cy.get(':nth-child(10) > .form-group > :nth-child(2) > .input-group > .select2 > .selection > .select2-selection').type('TISS - CONSULTA')

        cy.get('#select2-ctl00_Main_WDG_V_SAM_PEG_1465_PRINCIPAL_PageControl_PRINCIPAL_PRINCIPAL_ctl51_ctl01_select-results > :nth-child(1)').click()

        cy.get('#ctl00_Main_WDG_V_SAM_PEG_1465_PRINCIPAL_PageControl_PRINCIPAL_PRINCIPAL_TABREGIMEPGTO_1 > .row > :nth-child(1) > .form-group > :nth-child(2) > .input-group > .select2 > .selection > .select2-selection').click()

        cy.get('#ctl00_Main_WDG_V_SAM_PEG_1465_PRINCIPAL_PageControl_PRINCIPAL_PRINCIPAL_TABREGIMEPGTO_1 > .row > :nth-child(1) > .form-group > :nth-child(2) > .input-group > .select2 > .selection > .select2-selection').type('HOSPITAL 9 DE JULHO')

        cy.get('.select2-results__option').click()



        //cy.get('button[class="btn btn-icon-only btn-circle btn-sm usuario"]').click()
        //cy.get('a[id="ctl00_TopBar_Linkbuttonlogoff1"]').should('have.text',' Sair')
        //cy.get('a[id="ctl00_TopBar_Linkbuttonlogoff1"]').click()

        //cy.get(':nth-child(6) > .dropdown-toggle').click()
        //cy.get('#ctl00_TopBar_Linkbuttonlogoff1').click()

        //cy.get('a[href="authenticasion.aspx?cmd=logoff"]').should('have.text','Logoff')
        //cy.get('a[href="authentication.aspx?cmd=logoff"]').click()

    })
})


