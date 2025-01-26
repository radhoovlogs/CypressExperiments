import { faker } from "@faker-js/faker"

describe('On DemoQA', () => {
    it('I should be able to type', () => {
      cy.visit('https://demoqa.com/automation-practice-form');

      cy.get('#firstName').type(faker.person.zodiacSign());
      cy.get('#lastName').type(faker.commerce.productDescription()); 
  })
})