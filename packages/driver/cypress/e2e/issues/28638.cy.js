// https://github.com/cypress-io/cypress/issues/29093
describe('issue 28638', () => {
  before(() => {
    cy
    .viewport('macbook-16')
    .visit('/fixtures/issue-28638.html')
  })

  it('can click selection when rem width used', () => {
    cy.get('#visible-button').click()
  })
})
