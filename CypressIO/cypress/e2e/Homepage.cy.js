describe('Homepage', () => {
    beforeEach(() => {
        cy.visit('https://www.cypress.io/')
        cy.title('contains', 'JavaScript Web Testing and Component Testing Framework | cypress.io')
    })

    it('Verify Homepage redirection', () => {
        cy.get('[uid="MbWEY"]').contains('npm install cypress') //Verify 'npm install cypress' button is displayed
        cy.get('.border').contains('Documentation') //Verify 'Documentation' button is displayed

    })

    it('Verify npm install cypress button', () => {
        cy.get('[uid="MbWEY"]').contains('npm install cypress').click() //Verify 'npm install cypress' button is displayed
        cy.get('.border-3').should('be.visible') //Verify popup is displayed
        cy.get('.border[data-cy="modal-install-copy"]').click() //Click 'npm install cypress'
        cy.log('Command copied successfully!')
        cy.get('.group[aria-label="Close"]').click() //Click 'x' button
        cy.get('[uid="MbWEY"]').contains('npm install cypress').should('be.visible') //Verify return to homepage
    })

    it('Verify Documentation button', () => {
        cy.get('.border[href="https://on.cypress.io"]').click() //Verify 'Documentation' button is displayed
        cy.url().should('include', 'https://docs.cypress.io/guides/overview/why-cypress') //Verify url redirection
        cy.title('contains', 'Why Cypress? | Cypress Documentation') //Verify page title
        cy.get('h1').contains('Why Cypress?') //Verify page content
    })

    it.only('Verify Product dropdown', () => {

        //Product dropdown
        cy.get('#dropdownProduct').click() //Click 'Product' dropdown

        //'Browser Testing'
        cy.get('.font-secondary ').contains('Browser Testing').click() //Click 'Browser Testing'
        cy.url().should('include', '/app/') //Verify url redirection
        cy.title('contains', 'Open-Source JavaScript Test Runner | cypress.io testing tools') //Verify page title
        cy.get('h1').contains('Test') //Verify page content

        //Browser Testing > Component Testing
        cy.get('.group ').contains('Component Testing').click() //Click 'Component Testing'
        cy.get('.bg-gradient-to-r ').contains('Component Testing')

        //Browser Testing > Delightful Experience
        cy.get('.whitespace-nowrap').contains('Delightful Experience').click() //Click 'Delightful Experience' tag
        cy.get('.font-primary').contains('Delightful Experience') //Verify redirection

        //Browser Testing > Visual Debugging
        cy.get('.whitespace-nowrap').contains('Visual Debugging').click() //Click 'Visual Debugging' tag
        cy.get('.font-primary').contains('Visual Debugging') //Verify redirection

        //Browser Testing > Flake Resistance
        cy.get('.whitespace-nowrap').contains('Flake Resistance').click() //Click 'Flake Resistance' tag
        cy.get('.font-primary').contains('Flake Resistance') //Verify redirection  


    })

})