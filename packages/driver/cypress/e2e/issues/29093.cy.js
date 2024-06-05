const { getReasonIsHidden } = require('../../../src/dom/visibility')

describe('issue 29093', () => {
  before(() => {
    cy
    .viewport('macbook-16')
    .visit('/fixtures/issue-29093.html')
  })

  it('when display: contents with width in rem used not return 0 width', () => {
    expect(getReasonIsHidden(cy.$$('#sidebar-left > section')).includes('width'), 'when display: contents with width in rem used not return 0 width').to.be.false
  })
})
