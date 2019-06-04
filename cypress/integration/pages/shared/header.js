context('Header', () => {
  before(() => {
    cy.visit('http://localhost:3000')
  })

  it('should have a logo with img and title', () => {
    cy.get('[data-cy=logo] img').should('exist')
    cy.get('[data-cy=logo] .logo-title ').should('be', 'F1 Standings')
  });
})
