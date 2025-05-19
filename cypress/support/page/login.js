export default class LoginPage {
    
    id = (id) =>
        cy.get('#id').type(id)
    buttonLanjut = () =>
        cy.get('.btn').click()
    password = (pass) =>
        cy.get('#password').type(pass)




}