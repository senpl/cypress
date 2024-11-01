// https://github.com/cypress-io/cypress/issues/29605
describe('issue #29605', () => {
  before(() => {
    cy.visit('/fixtures/issue-29605.html')
  })

  it('evaluates element with display: contents width as visible', () => {
    cy.get('#child').should('be.visible')
  })
})
