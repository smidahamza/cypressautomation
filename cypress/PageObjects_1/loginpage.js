class Login {
  
   setEmail(email){
        cy.get("[placeholder='Email Address']").eq(0).type(email)
    }
    setPassword(password){
        cy.get("[placeholder='Password']").type(password);
    }
    clickSubmit(){
        cy.get(".btn.btn-default").eq(0).click();
    }
   deleteAcoount(loc) {
    cy.get(loc).click()
   }
}

export default Login;
