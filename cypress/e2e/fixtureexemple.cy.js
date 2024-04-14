
import Login from "../PageObjects/LoginPage";
describe('Handle Tables',(()=>{
 
    beforeEach('Login',()=>{
        cy.visit("https://demo.opencart.com/admin/index.php");

        const ln = new Login();
        ln.setUserName("demo");
        ln.setPassword("demo");
        ln.clickSubmit()
   
        ln.ValidateLogin()
       
        /*cy.fixture("users").then( user =>{
   
          cy.get("#input-username").type(user.username);
          cy.get("#input-password").type(user.password);
   
        }
        )

        cy.readFile("cypress/datas/users.json").then( user =>{
 
            cy.get("#input-username").type(user.username);
            cy.get("#input-password").type(user.password);
     
          }
          )

            //API QUI RETOURNE LES USERS
      cy.writeFile("cypress/datas/BD.json",{
 
        username:"demo",
        password:"demo"
 
      }
      )
 
      cy.readFile("cypress/datas/BD.json").then( user =>{
 
        cy.get("#input-username").type(user.username);
        cy.get("#input-password").type(user.password);
 
      }
      )
   
        
        cy.get("button[type='submit']").click();
   
        cy.get(".btn-close").click();*/
   
        //Customers-->Customers
        cy.get("#menu-customer>a").click();
        cy.get("#menu-customer>ul>li:first-child").click();
   
    })
   
   
    it('Check Number Rows & Columns',()=>{
      cy.get("table[class='table table-bordered table-hover']>tbody>tr").should('have.length','10');
      cy.get("table[class='table table-bordered table-hover']>thead>tr>td").should("have.length",'7');
    })
   
   
  
  }))