describe('App', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })
  it('has the right title', () => {
    cy.title().should('be', 'Book App')
  })

  it('has separator with text', () => {
    cy.get('[data-cy="Separator"')
      .contains('TODO')
      .should('have.lenghth', 1)
  })

  /*it('has an', () => {
    cy.get('NavLink[search="Enter new search"]').should('have.lenght', 2)
  })*/
})
