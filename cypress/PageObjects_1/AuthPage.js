class Authentication {
  
        setUserName(name){
            cy.get("[placeholder='Name']").type(name)

        }
        setEmail(email){
            cy.get("[placeholder='Email Address']").eq(1).type(email)
        }
        setTitle(gender) {
            cy.get("#id_gender1").check()
        }
        setPassword(password) {
            cy.get("#password").type(password)
        }
        clickSubmit(){
            cy.get(".btn.btn-default").eq(1).click();
        }
    
}

export default Authentication;
   