// https://docs.cypress.io/api/introduction/api.html

describe('Index Test', () => {
  it('Visits the app index url', () => {
    cy.visit('/')

    cy.get('.gnome-list-wrapper')
      .find('.btn')
      .should('exist')
      .should('not.be.empty')
      .contains('Load More')

    cy.get('.gnome-list-wrapper img')
      .each((i) => {
        cy.get(i).should('have.attr', 'src').should('include', 'https://')
        cy.get(i).should('have.attr', 'alt').should('not.be.empty')
      })
  })
})

describe('Profile Test', () => {
  it('Visits a profile page', () => {
    cy.visit('/profile/0')

    cy.get('.profile-image-main').invoke('attr', 'alt').then((imgAlt) => {
      const alt = imgAlt

      cy.get('h1').should((el) => {
        expect(el.text()).to.eq(alt)
      })
    })
  })
})
