describe('Create account', () => 
{
    it('create account',()=>{
        cy.visit("https://automationexercise.com/login");
        cy.get(".signup-form h2").should("have.text", "New User Signup!")

        const auth = new Authentication();
        auth.setUserName("sami");
        auth.setEmail("sami@exemple.com");
        auth.clickSubmit()
   
})
})