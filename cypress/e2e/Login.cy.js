import Login from "../PageObjects_1/loginpage";
describe('automation exemple', () => 
{
    it('Login',()=>{
        cy.visit("https://automationexercise.com/login");
        cy.get(".login-form h2").should("have.text", "Login to your account")

        const auth = new Login();
        
        //auth.setEmail("sami@exemple.com");
        //auth.setPassword("sami1234?");
         auth.setEmail("hamza@exemple.com");
        auth.setPassword("hamza1234?");
        auth.clickSubmit()
        auth.deleteAcoount(".nav.navbar-nav li:nth-child(5)")
   
})
})