/*global cy*/
describe('App', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })
  it('has the right title', () => {
    cy.title().should('be', 'Book App')
  })

  it('has a selected search button', () => {
    describe('has search button', () => {
      cy.get('[data-cy=Button]').click()
    })
  })
})
