describe('Digitação de Guias Consulta - AG_CORRENTE', () => {
    beforeEach(() => {
        cy.login('automacao','sup01')  
    })

it('Acessando papel (módulo) de Processamento de Contas', () => {    
    cy.visit('http://mga-apl006/WebAppQUALIDADEAGCORRENTE/Default.aspx')
    cy.get(':nth-child(6) > .dropdown-toggle > .fa').click()    
    cy.get(':nth-child(9) > a > saúde').click()
})

it('Acessando menu lateral - Processamento de Contas > Digitação de Guias', () => {   
    cy.visit('http://mga-apl006/WebAppQUALIDADEAGCORRENTE/Default.aspx')    
    cy.get('#ctl00_SidebarMenu > :nth-child(9) > :nth-child(1) > .title').click()   
    cy.get('[style="display: block;"] > :nth-child(7) > .nav-link > .title').click()
})


it('Digitação de Guias - Incluindo dados do Protocolo', () => {    
    cy.visit('http://mga-apl006/WebAppQUALIDADEAGCORRENTE/Pages/saude/a/ProcessamentoContas/ConsultaDigitacaoGuias.aspx?i=MENU_DIGITACAOGUIAS&m=SAUDE_MENUPRINCIPAL')    
        cy.get('#ctl00_Main_CONSULTADEPROTOCOLOS_toolbar > .btn').click()
    cy.wait(1000)

    
    //Selecionar tipo guia = CONSULTA
    cy.get('.col-md-10 > .mt-radio-inline > :nth-child(1) > label').click()
    cy.wait(1000)
})
  /*  
    //Selecionar Prestador
    cy.get('.select2-selection').click()
    cy.get('.select2-selection').type('08752137000104')
    cy.wait(2000)
    cy.get('.select2-results__option').click()
    cy.wait(2000)
    
    
    //Clicar no botão - Salvar
    cy.get('#ctl00_Main_PROTOCOLO_FORM_toolbar > .blue').click()    
    cy.wait(5000)
    cy.get('#ctl00_Main_GUIAS_CONSULTA_toolbar > .btn').click().should('be.visible')
    cy.wait(1000)
})

it('Incluindo dados da Guia', () => {   
    cy.wait(2000)  
    cy.visit('http://mga-apl044/QCaixa_Corrente/Pages/saude/a/ProcessamentoContas/ConsultaDigitacaoGuias.aspx?i=MENU_DIGITACAOGUIAS&m=SAUDE_MENUPRINCIPAL')
    cy.wait(5000)  
    ////Clicar no botão de inclusão de Guias - Consulta\\\\
    cy.get('#ctl00_Main_GUIAS_CONSULTA_toolbar > .btn').click().should('be.visible')
    cy.wait(5000)   
    
    //2 - Numero Guia Prestador
    cy.get('#ctl00_Main_GUIA_CONSULTA_FORM_PageControl_GUIACONSULTA_GUIACONSULTA_GUIAPRESTADOR').click()
    cy.get('#ctl00_Main_GUIA_CONSULTA_FORM_PageControl_GUIACONSULTA_GUIACONSULTA_GUIAPRESTADOR').type('474748')

    //4 - Selecionar Beneficiário
    cy.get(':nth-child(2) > .col-md-12 > .form-group > :nth-child(2) > :nth-child(1) > .input-group > .select2 > .selection > .select2-selection').click()
    cy.get(':nth-child(2) > .col-md-12 > .form-group > :nth-child(2) > :nth-child(1) > .input-group > .select2 > .selection > .select2-selection').type('010010353300')
    cy.wait(1000)   
    cy.get('.select2-results__option').click()
    cy.wait(1000)   
    
    //9_10 - Selecionar Prestador Executante
    cy.get(':nth-child(3) > .col-md-12 > .form-group > .col-md-10 > :nth-child(1) > .input-group > .select2 > .selection > .select2-selection').click()
    cy.get(':nth-child(3) > .col-md-12 > .form-group > .col-md-10 > :nth-child(1) > .input-group > .select2 > .selection > .select2-selection').type('00919386000130')
    cy.wait(1000)
    cy.get('.select2-results__option').click()
    cy.wait(2000)
    
    //Selecionar Endereço do Prestador Executante
     cy.get(':nth-child(4) > :nth-child(2) > :nth-child(1) > .input-group > .select2 > .selection > .select2-selection').click().should('be.visible')
     cy.wait(1000)
     cy.get(':nth-child(4) > :nth-child(2) > :nth-child(1) > .input-group > .select2 > .selection > .select2-selection').type ('RUA ALVARO MAIA')     
     cy.wait(1000)
     cy.get('.select2-results__option').click()
     cy.wait(2000)
    
    
    //12 - Selecionar Profissional Executante
    cy.get(':nth-child(5) > .col-md-12 > :nth-child(2) > .col-md-10 > :nth-child(1) > .input-group > .select2 > .selection > .select2-selection').click()
    cy.wait(1000)
    cy.get(':nth-child(5) > .col-md-12 > :nth-child(2) > .col-md-10 > :nth-child(1) > .input-group > .select2 > .selection > .select2-selection').type('A C PALMA')
    cy.wait(1000)
    cy.get('.select2-results__option').click()
    cy.wait(2000)

    //13 - Selecionar Conselho Profissional do Executante
    cy.get(':nth-child(3) > :nth-child(4) > :nth-child(1) > .input-group > .select2 > .selection > .select2-selection').click()
    cy.wait(1000)
    cy.get(':nth-child(3) > :nth-child(4) > :nth-child(1) > .input-group > .select2 > .selection > .select2-selection').type('CRAS')
    cy.wait(1000)
    cy.get('.select2-results__option').click()
    cy.wait(1000)

    //14 - Inserir número do Conselho
    cy.get('#ctl00_Main_GUIA_CONSULTA_FORM_PageControl_GUIACONSULTA_GUIACONSULTA_NUMEROCONSELHOPROFISSIONAL').click()
    cy.get('#ctl00_Main_GUIA_CONSULTA_FORM_PageControl_GUIACONSULTA_GUIACONSULTA_NUMEROCONSELHOPROFISSIONAL').type('444556')

    //15 - Selecionar UF do Prof. Executante
    cy.get(':nth-child(6) > :nth-child(4) > :nth-child(1) > .input-group > .select2 > .selection > .select2-selection').click()
    cy.wait(1000)
    cy.get(':nth-child(6) > :nth-child(4) > :nth-child(1) > .input-group > .select2 > .selection > .select2-selection').type('Paran')
    cy.wait(1000)
    cy.get('.select2-results__option').click()
    cy.wait(1000)

    //16 - Código CBO
    cy.get(':nth-child(7) > .col-md-4 > :nth-child(1) > .input-group > .select2 > .selection > .select2-selection').click()
    cy.wait(1000) 
    cy.get(':nth-child(7) > .col-md-4 > :nth-child(1) > .input-group > .select2 > .selection > .select2-selection').type('Biologo')
    //cy.get('ctl00_Main_GUIA_CONSULTA_FORM_PageControl_GUIACONSULTA_GUIACONSULTA_ctl72_ctl01_select').click()
    //cy.get('#select2-ctl00_Main_GUIA_CONSULTA_FORM_PageControl_GUIACONSULTA_GUIACONSULTA_ctl72_ctl01_select-results > :nth-child(1)').click()
    cy.wait(1000) 
    cy.get('.select2-results__option').click()
    cy.wait(1000)    
   
   //17 - Indicação de Acidente - OUTROS
    cy.get('.col-md-10 > .mt-radio-inline > :nth-child(3) > span').click()
    cy.wait(1000)
   
    //19 - Tipo de Consulta - PRIMEIRA CONSULTA
    cy.get(':nth-child(4) > .mt-radio-inline > :nth-child(1) > span').click()
    cy.wait(1000)
       
    //20 - Selecionar Tabela TUSS (22)
    cy.get(':nth-child(10) > :nth-child(2) > :nth-child(1) > .input-group > .select2 > .selection > .select2-selection').click()
    cy.wait(1000)
    cy.get(':nth-child(10) > :nth-child(2) > :nth-child(1) > .input-group > .select2 > .selection > .select2-selection').type('22')
    cy.wait(1000)
    cy.get('.select2-results__option').click()
    cy.wait(1000)

    //21 - Selecionar Código do Procedimento (1.01.01.012 - Consulta em consultório)
    cy.get(':nth-child(10) > :nth-child(4) > :nth-child(1) > .input-group > .select2 > .selection > .select2-selection').click()
    cy.wait(1000)
    cy.get(':nth-child(10) > :nth-child(4) > :nth-child(1) > .input-group > .select2 > .selection > .select2-selection').type('1.01.01.012')
    cy.wait(1000)
    cy.get('.select2-results__option').click()
    cy.wait(1000)

    //22 - Indicar valor do procedimento
    cy.get('#ctl00_Main_GUIA_CONSULTA_FORM_PageControl_GUIACONSULTA_GUIACONSULTA_VALORAPRESENTADO').click()
    cy.wait(1000)
    cy.get('#ctl00_Main_GUIA_CONSULTA_FORM_PageControl_GUIACONSULTA_GUIACONSULTA_VALORAPRESENTADO').type('333,880')
    cy.wait(1000)

    //23 - Digitar Observação/Justificativa (texto livre)
    cy.get('#ctl00_Main_GUIA_CONSULTA_FORM_PageControl_GUIACONSULTA_GUIACONSULTA_OBSERVACAO').click()
    cy.wait(1000)
    cy.get('#ctl00_Main_GUIA_CONSULTA_FORM_PageControl_GUIACONSULTA_GUIACONSULTA_OBSERVACAO').type('Teste de inclusão via Cypress')
    cy.wait(1000)

    // Salvar Guia
    cy.get('#ctl00_Main_GUIA_CONSULTA_FORM_FormContainer > .form-actions > .blue').click().should('be.visible')
    cy.wait(2000)
   
     // Clicar no botão Voltar
    //cy.get('#ctl00_Main_GUIA_CONSULTA_FORM>.CMD_VOLTAR').click().should('be.visible')
    cy.get('#ctl00_Main_GUIA_CONSULTA_FORM_FormContainer > .form-actions > .custom-action').click().should('be.visible')
    cy.wait(1000)  
})
    //Clicar no botão Finaliza
        // cy.get('[rel="2"] > .text-right > a').click()
        // cy.wait(1000)
        //Linhas acima apenas pra utilizar um protocolo com evento sem ter q digitar novamente
it('Retornado à tela de Digitação de Guias - Protocolo e finalizando', () => {   
     cy.visit('http://mga-apl044/QCaixa_Corrente/Pages/saude/a/ProcessamentoContas/ConsultaDigitacaoGuias.aspx?i=MENU_DIGITACAOGUIAS&m=SAUDE_MENUPRINCIPAL')
     cy.get('.custom-action.green-seagreen').click().should('be.visible')       
     cy.wait(1000)

    })   
*/

})





