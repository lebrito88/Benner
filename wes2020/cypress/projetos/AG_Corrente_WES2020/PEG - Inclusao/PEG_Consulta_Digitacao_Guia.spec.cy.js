describe('Digitação de Guias Consulta - AG_CORRENTE', () => {
    beforeEach(() => {
        cy.login('automacao','sup01')  
    })

it('Acessando papel (módulo) de Processamento de Contas', () => {    
    //cy.visit('http://mga-apl006/WebAppQUALIDADEAGCORRENTE/Default.aspx')
    cy.visit('http://mga-apl044/QCaixa_Corrente/Default.aspx')
    cy.get(':nth-child(6) > .dropdown-toggle').click()       
    cy.get('.dropdown-menu-list > :nth-child(7) > a').click() 
})


it('Acessando menu lateral - Processamento de Contas > Digitação de Guias', () => {   
    //cy.visit('http://mga-apl006/WebAppQUALIDADEAGCORRENTE/Default.aspx')
    cy.visit('http://mga-apl044/QCaixa_Corrente/Default.aspx')
    cy.get('#ctl00_SidebarMenu > :nth-child(9) > :nth-child(1) > .title').click()   
    //Botão Nova Guia
    cy.get('[style="display: block;"] > :nth-child(6) > .nav-link > .title').click()  
})

it('Digitação de Guias - Incluindo dados da Guia', () => {   
    cy.visit('http://mga-apl044/QCaixa_Corrente/Pages/saude/a/ProcessamentoContas/ConsultaDigitacaoGuias.aspx?i=MENU_DIGITACAOGUIAS&m=SAUDE_MENUPRINCIPAL')
    cy.get('#ctl00_Main_CONSULTADEPROTOCOLOS_toolbar > .btn').click()
    //Selecionar tipo guia = CONSULTA
    cy.get('.col-md-10 > .mt-radio-inline > :nth-child(1) > label').click()
    cy.get('.select2-selection').click()
    //Selecionar Prestador
    cy.get('.select2-selection').type('HOSPITAL RIO LARANJEIRAS')
    cy.get('.select2-results__option').click()
    //Clicar no botão - Salvar
    cy.get('#ctl00_Main_PROTOCOLO_FORM_toolbar > .blue').click()
    cy.wait(1000)

})  



})


