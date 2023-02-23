describe('Landing Page', () =>{
    beforeEach( () =>{
        cy.visit('/')
        cy.wait(500)
    })
    it('Login Page Opens', () => {
        cy.get('[class="logo"]').should('exist')
        cy.get('span[class="white-text"]').should('have.text', 'Weather forecasts, nowcasts and history in a fast and elegant way')
    })
})
