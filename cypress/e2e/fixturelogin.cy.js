import LoginIN from "../PageObjects_1/LoginIn";
describe('Fixture login', () => 
{
    it('Fixture login', () => {
        cy.visit("https://automationexercise.com/login");
        cy.get(".login-form h2").should("have.text", "Login to your account")
        cy.fixture("inscription").then( Data => {
            //cy.get("[placeholder='Name']").type(Data.name);
            const log = new LoginIN()
            //log.ClickLogout(Data.logoutbutton)
            log.setEmail(Data.emailaddress)
            log.setPassword(Data.passwd)
            log.clickSubmit(Data.loginbutton)
            log.ClickLogout(Data.logoutbutton)
            //cy.get("[data-qa='login-password']").type(Data.passwd)
            //cy.get(Data.loginbutton).click()
            //cy.get(Data.logoutbutton).click()
            
            
        })
    })
})