class LoginIN {
  
    ClickLogout(loc)
    {
        cy.get(loc).click()
    }
    setEmail(email){
         cy.get("[placeholder='Email Address']").eq(0).type(email)
     }
     setPassword(password){
         cy.get("[placeholder='Password']").type(password);
     }
     clickSubmit(loc)
     {
         cy.get(loc).eq(0).click();
     }
    deleteAcoount(loc) {
     cy.get(loc).click()
    }
 }
 
 export default LoginIN;