import { Page } from "../support/page"
 
describe('Login', () => {
  beforeEach('Open Login Page', () => {
    cy.visit('/')
  })
  it('Login With Valid Credentials', () => {
    Page.login.id(Cypress.env('ID'))
    Page.login.buttonLanjut()
    Page.login.id(Cypress.env('EMAIL'))
    Page.login.password(Cypress.env('PASSWORD'))
    Page.login.buttonLanjut()

    
  })
})