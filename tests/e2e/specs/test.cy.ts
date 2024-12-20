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

  it('Checks if the count refreshes correctly when navigating from the home page to the settings page', () => {
    localStorage.setItem('count', '5');
    cy.visit('/')
    cy.get('.number-display').should('contain', '5')
    cy.get('.settings-button').click()
    cy.url().should('include', '/settings')
    cy.get('.count-display').should('contain', '5')
  })
})

describe('Settings Page Tests', () => {
  it('Checks if the count is displayed on the settings page', () => {
    localStorage.setItem('count', '5');
    cy.visit('/settings')
    cy.get('.count-display').should('contain', '5')
  })

  it('Checks if the "Reset" button updates the displayed count without changing the stored value', () => {
    localStorage.setItem('count', '5');
    cy.visit('/settings')
    cy.get('.reset-button').click()
    cy.get('.count-display').should('contain', '0')
    cy.window().then((win) => {
      expect(win.localStorage.getItem('count')).to.equal('5')
    })
  })

  it('Checks if the "Decrement" button updates the displayed count without changing the stored value', () => {
    localStorage.setItem('count', '5');
    cy.visit('/settings')
    cy.get('.decrement-button').click()
    cy.get('.count-display').should('contain', '4')
    cy.window().then((win) => {
      expect(win.localStorage.getItem('count')).to.equal('5')
    })
  })

  it('Checks if the "Save" button sets the stored value to the displayed count and navigates to the home page', () => {
    localStorage.setItem('count', '5');
    cy.visit('/settings')
    cy.get('.decrement-button').click()
    cy.get('.count-display').should('contain', '4')
    cy.get('.save-button').click()
    cy.url().should('include', '/home')
    cy.window().then((win) => {
      expect(win.localStorage.getItem('count')).to.equal('4')
    })
  })

  it('Checks if the "Cancel" button navigates to the home page without saving any changes', () => {
    localStorage.setItem('count', '5');
    cy.visit('/settings')
    cy.get('.decrement-button').click()
    cy.get('.count-display').should('contain', '4')
    cy.get('.cancel-button').click()
    cy.url().should('include', '/home')
    cy.window().then((win) => {
      expect(win.localStorage.getItem('count')).to.equal('5')
    })
  })

  it('Checks if the count refreshes correctly when navigating from the settings page to the home page', () => {
    localStorage.setItem('count', '5');
    cy.visit('/settings')
    cy.get('.count-display').should('contain', '5')
    cy.get('.cancel-button').click()
    cy.url().should('include', '/home')
    cy.get('.number-display').should('contain', '5')
  })
})
