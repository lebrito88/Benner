describe('Digitar PEG de Consulta - AG_CORRENTE', () => {
    before(() => {
    //Acessar link da base da CABESP
        cy.viewport(1440,900)
        cy.visit('http://mga-apl006/WebAppQUALIDADEAGCORRENTE/Login.aspx')
        cy.get('h4[id="wesLogin_titlePage"]').should('have.text','Identifique-se')
    })

    //Precondição: Data de Pagamento usada no PEG deve ser >=data atual e estar aberta
    it('Incluir PEG de Consulta',()=>{
        //Login e senha      
        cy.get('#UserName').type("sysdba")
        //cy.get('#UserName').type("sysdba").should('be.visible')      
        cy.get('#Password').type("24073944")        
        cy.get('#LoginButton').click()
    
        //Acessando papel (módulo) de Processamento de Contas
        cy.get(':nth-child(6) > .dropdown-toggle').click()
        cy.get('.dropdown-menu-list > :nth-child(9) > a').click()

        //Acessando menu lateral - Processamento de Contas
        cy.get('#ctl00_SidebarMenu > :nth-child(9) > :nth-child(1) > .title').click()

        //Acessando menu lateral - Competência de PEG
        cy.get('[style="display: block;"] > :nth-child(3) > .nav-link > .title').click()

        //Pesquisando o Ano de Competência desejado do PEG
        //cy.get('#ctl00_Main_WDG_V_SAM_COMPETPEG_778_PRINCIPAL_FilterControl_SearchField').click()
        cy.get('#ctl00_Main_WDG_V_SAM_COMPETPEG_778_PRINCIPAL_FilterControl_SearchField').type("2022")
        cy.get('#ctl00_Main_WDG_V_SAM_COMPETPEG_778_PRINCIPAL_FilterControl_SearchButton > .fa').click()
        cy.wait(1000)

        //Seecionando o Ano de Competência desejado do PEG
        cy.get('td[data-field="COMPETENCIA"]').click()
        cy.wait(1000)

        //Selecionado o menu Filiais
        cy.get('#portlet_WDG_V_SAM_COMPETPEG_778_LNK1 > .portlet-title > .caption > .caption-subject').click()
        cy.wait(1000)
        //cy.get('td[data-field="NOME"]').click()
        //cy.wait(1000)

        //Selecionado Filial Padrão
        cy.get('tbody > tr > .text-left > a').click()

        //Selecionado o menu Em Digitação
        cy.get('#portlet_WDG_V_FILIAIS_779_LNK1 > .portlet-title > .caption > .caption-subject').click()

        //Selecionado o menu Novo 
        cy.get('#ctl00_Main_WDG_V_FILIAIS_779_LNK1_toolbar > .btn').click()
        

        //TELA DE INCLUSÃO DE PEG
        // Digitação de PEG - Selecionando data de Recebimento = Dia atual
        cy.get('#ctl00_Main_WDG_V_SAM_PEG_1465_PRINCIPAL_PageControl_PRINCIPAL_PRINCIPAL_DATARECEBIMENTO_DATE').click()
        cy.contains('Hoje').click()

        // Digitação de PEG - Selecionando campo Tipo de PEG = "TISS - CONSULTA"
        cy.get(':nth-child(10) > .form-group > :nth-child(2) > .input-group > .select2 > .selection > .select2-selection').click()
        cy.get(':nth-child(10) > .form-group > :nth-child(2) > .input-group > .select2 > .selection > .select2-selection').type('TISS - CONSULTA')
        cy.get('#select2-ctl00_Main_WDG_V_SAM_PEG_1465_PRINCIPAL_PageControl_PRINCIPAL_PRINCIPAL_ctl51_ctl01_select-results > :nth-child(1)').click()
        cy.wait(1000)

        // Digitação de PEG - Selecionando campo Recebedor = "HOSPITAL SANTA APARECIDA - STR"
        cy.get('#ctl00_Main_WDG_V_SAM_PEG_1465_PRINCIPAL_PageControl_PRINCIPAL_PRINCIPAL_TABREGIMEPGTO_1 > .row > :nth-child(1) > .form-group > :nth-child(2) > .input-group > .select2 > .selection > .select2-selection').click()
        cy.get('#ctl00_Main_WDG_V_SAM_PEG_1465_PRINCIPAL_PageControl_PRINCIPAL_PRINCIPAL_TABREGIMEPGTO_1 > .row > :nth-child(1) > .form-group > :nth-child(2) > .input-group > .select2 > .selection > .select2-selection').type('HOSPITAL SANTA APARECIDA - STR')
        cy.get('.select2-results__option').click()        
        cy.wait(1000)

        // Digitação de PEG - Selecionando campo Local de Execução = "HOSPITAL SANTA APARECIDA - STR"
        cy.get(':nth-child(2) > .form-group > :nth-child(2) > .input-group > .select2 > .selection > .select2-selection').click()
        cy.get(':nth-child(2) > .form-group > :nth-child(2) > .input-group > .select2 > .selection > .select2-selection').type('HOSPITAL SANTA APARECIDA - STR')
        cy.get('.select2-results__option').click()        
        cy.wait(1000)

        // Digitação de PEG - Selecionando Quantidade de Guias apresentadas
        cy.get('#ctl00_Main_WDG_V_SAM_PEG_1465_PRINCIPAL_PageControl_PRINCIPAL_PRINCIPAL_QTDGUIA').click()
        cy.get('#ctl00_Main_WDG_V_SAM_PEG_1465_PRINCIPAL_PageControl_PRINCIPAL_PRINCIPAL_QTDGUIA').type('1')

        // Digitação de PEG - Selecionando Qtde. de Guias Informadas
        cy.get('#ctl00_Main_WDG_V_SAM_PEG_1465_PRINCIPAL_PageControl_PRINCIPAL_PRINCIPAL_QTDGUIAINFORMADA').click()
        cy.get('#ctl00_Main_WDG_V_SAM_PEG_1465_PRINCIPAL_PageControl_PRINCIPAL_PRINCIPAL_QTDGUIAINFORMADA').type('1')

        // Digitação de PEG - Selecionando Data de Pagamento = dia atual
        cy.get('#ctl00_Main_WDG_V_SAM_PEG_1465_PRINCIPAL_PageControl_PRINCIPAL_PRINCIPAL_DATAPAGAMENTO_DATE').click()
        cy.contains('Hoje').click()

        // Digitação de PEG - Confirmar a capa do PEG
        cy.get('#ctl00_Main_WDG_V_SAM_PEG_1465_PRINCIPAL_FormContainer > .form-actions > .blue').click()



        //TELA DE INCLUSÃO DE GUIA DE PEG
        // Digitação da Guia- Selecionando data de Recebimento = Dia atual

        cy.get('#portlet_WDG_V_SAM_PEG_1465_LNK3 > .portlet-title > .caption > .caption-subject').click()
        


        //cy.get('button[class="btn btn-icon-only btn-circle btn-sm usuario"]').click()
        //cy.get('a[id="ctl00_TopBar_Linkbuttonlogoff1"]').should('have.text',' Sair')
        //cy.get('a[id="ctl00_TopBar_Linkbuttonlogoff1"]').click()

        //cy.get(':nth-child(6) > .dropdown-toggle').click()
        //cy.get('#ctl00_TopBar_Linkbuttonlogoff1').click()

        //cy.get('a[href="authenticasion.aspx?cmd=logoff"]').should('have.text','Logoff')
        //cy.get('a[href="authentication.aspx?cmd=logoff"]').click()

    })
})


