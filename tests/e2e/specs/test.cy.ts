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

  it('Checks for the presence of the settings-button element', () => {
    cy.visit('/')
    cy.get('.settings-button').should('exist')
  })

  it('Clicks the settings-button and checks if the Settings page is displayed', () => {
    cy.visit('/')
    cy.get('.settings-button').click()
    cy.url().should('include', '/settings')
  })
})

describe('Settings Page Tests', () => {
  it('Checks for the presence of the reset-button element', () => {
    cy.visit('/settings')
    cy.get('.reset-button').should('exist')
  })

  it('Checks for the presence of the decrement-button element', () => {
    cy.visit('/settings')
    cy.get('.decrement-button').should('exist')
  })

  it('Checks for the presence of the save-button element', () => {
    cy.visit('/settings')
    cy.get('.save-button').should('exist')
  })

  it('Checks for the presence of the cancel-button element', () => {
    cy.visit('/settings')
    cy.get('.cancel-button').should('exist')
  })

  it('Clicks the reset-button and checks if the number-display element updates to 0', () => {
    cy.visit('/settings')
    cy.get('.reset-button').click()
    cy.visit('/')
    cy.get('.number-display').should('contain', '0')
  })

  it('Clicks the decrement-button and checks if the number-display element updates correctly', () => {
    cy.visit('/')
    cy.get('.count-button').click()
    cy.get('.number-display').should('contain', '1')
    cy.visit('/settings')
    cy.get('.decrement-button').click()
    cy.visit('/')
    cy.get('.number-display').should('contain', '0')
  })

  it('Clicks the save-button and checks if the changes are saved', () => {
    cy.visit('/settings')
    cy.get('.save-button').click()
    cy.url().should('include', '/home')
  })

  it('Clicks the cancel-button and checks if the changes are canceled', () => {
    cy.visit('/settings')
    cy.get('.cancel-button').click()
    cy.url().should('include', '/home')
  })
})
