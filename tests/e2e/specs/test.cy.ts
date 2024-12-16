describe('Home Page Tests', () => {
  it('Checks for the presence of the number-display element containing the number 0', () => {
    cy.visit('/')
    cy.get('.number-display').should('contain', '0')
  })

  it('Checks for the presence of the count-button element', () => {
    cy.visit('/')
    cy.get('.count-button').should('exist')
  })

  it('Clicks the count-button and checks if the number-display element updates to 1', () => {
    cy.visit('/')
    cy.get('.count-button').click()
    cy.get('.number-display').should('contain', '1')
  })
})
