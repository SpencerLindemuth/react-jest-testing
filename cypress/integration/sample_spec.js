describe('My First Test', function() {
    it('Does not do much!', function() {
      expect(true).to.equal(true)
    })
    it('visits the app', () => {
      cy.visit('http://localhost:3000')
    })
  })


describe('NavBar Tests', () => {
    it('has a navbar', () => {
        cy.get('#navbar')
    })
    it('has site logo here text', () => {
        cy.get('#navbar').contains("Site logo here")
    })
})
  