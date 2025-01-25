describe('On Primaria Cluj', () => {
    it('I should be able to access a new tab', () => {
      cy.visit('https://primariaclujnapoca.ro/monitorul-oficial-local/');

      cy.get('#menu-item-459041 a').invoke('removeAttr', 'target').click();

      cy.title().should('equal', 'Sport în Cluj-Napoca – Complex agrement') 
  })
})