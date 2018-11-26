/*global cy*/
describe('App', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('has the right title', () => {
    cy.title().should('be', 'Book App')
  })

  describe('search button', () => {
    it('has a selected search button', () => {
      cy.get('[data-cy="Button"]').click()
    })
  })

  /*it('has a input field', () => {
    describe('title can be typed in', () => {
      cy.get('[data-cy=inputTitle]').should('have.length', 1)
    })
  })*/
})
