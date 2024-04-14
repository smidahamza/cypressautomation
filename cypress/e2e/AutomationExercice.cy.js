import Authentication from "../PageObjects_1/AuthPage";
describe('automation exemple', () => 
{
    it('Login',()=>{
        cy.visit("https://automationexercise.com/login");
        cy.get(".signup-form h2").should("have.text", "New User Signup!")

        /*const auth = new Authentication();
        auth.setUserName("sami");
        auth.setEmail("sami@exemple.com");
        auth.clickSubmit()*/
        const auth = new Authentication();
        auth.setUserName("hamza");
        auth.setEmail("hamza@exemple.com");
        auth.clickSubmit()
        auth.setTitle("#id_gender1")
        
       // cy.get("#id_gender1").check().should("be.checked")
        //cy.get("#id_gender2").uncheck()
        cy.get("#name").should("have.value", "hamza")
        cy.get("#email").should("have.value", "hamza@exemple.com")
        //cy.get("#password").type("sami1234?")
        auth.setPassword("hamza1234?")
        cy.get("#days").select('9')
        cy.get("#months").select('1')
        cy.get("#years").select('1994')
        cy.get("#newsletter").check()
        cy.get("#optin").uncheck()
        cy.get("#first_name").type("hamza")
        cy.get("#last_name").type("smida")
        cy.get("#company").type("google")
        cy.get("#address1").type("New york city")
        cy.get("#country").select('Canada')
        cy.get("#state").type("at work")
        cy.get("#city").type("New york")
        cy.get("#zipcode").type("1245")
        cy.get("#mobile_number").type("0178945612")
        cy.get('.btn.btn-default').eq(0).click({ multiple: true })
        cy.get(".pull-right").click()
        

   
})
})