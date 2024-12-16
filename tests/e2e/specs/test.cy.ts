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

  it('Checks if the stored count value is displayed on page load', () => {
    localStorage.setItem('count', '5');
    cy.visit('/')
    cy.get('.number-display').should('contain', '5')
  })

  it('Checks if the new count value is stored in local storage after button click', () => {
    cy.visit('/')
    cy.get('.count-button').click()
    cy.get('.number-display').should('contain', '1')
    cy.window().then((win) => {
      expect(win.localStorage.getItem('count')).to.equal('1')
    })
  })
})
