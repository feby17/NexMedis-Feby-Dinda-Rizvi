export default class LoginPage {
    
    id = (id) =>
        cy.get('#id').type(id)
    email = (email) =>
        cy.get('#id').type(email)
    buttonLanjut = () =>
        cy.get('.btn').click()
    password = (pass) =>
        cy.get('#password').type(pass)
    Element_Assertion = () => ({
        get usernameTitle() {
            return cy.get('[style="margin-bottom: 20px;"] > .black')
        },
    })
    

    //PageObjects.ManagementTugas.Element_Assertion().topiksesikosong.should('contain', dashboardManagementTugas.topik_sesi_kosong); 



}