

/*describe('exemple tabs', () => {
 
    /*it("exemple tabs", function () {
      //URL launch
      cy.visit("https://the-internet.herokuapp.com/windows")
    
      cy.get('.example a').invoke("removeAttr", "target").click()
      cy.get('h3').should("be.visible")
      cy.get('h3').should("contain", "New Window")
      cy.go("back")
    })

    it("exemple tabs", function () {
        //URL launch
        cy.visit("https://the-internet.herokuapp.com/windows")
      
        cy.get('.example a').then((e) => {
         let url = e.prop("href")
         cy.visit(url)

        }

        )
        cy.url().should("include", "https://the-internet.herokuapp.com/windows/new")
      })

      beforeEach("exemple tabs", function () {
        //URL launch
        cy.visit("https://demo.opencart.com/admin/index.php")
        cy.get("#input-username").type("demo")
        cy.get("#input-password").type("demo")
        cy.get(".btn-primary").click()
        cy.get(".btn-close").click()
        cy.get("h1").should("contain", "Dashboard")
    

})

it("exemple tabs", function () {
    //URL launch
    //cy.visit("https://demo.opencart.com/admin/index.php")
    cy.get("#menu-customer").click()
    cy.get("#collapse-5 li:first-child").click()
    cy.get("h1").should("have.text", "Customers")
    cy.get(".table.table-bordered.table-hover thead tr td").should("have.length", "7")


})
})*/

describe('exemple tabs', () => {

      beforeEach("exemple tabs", function () {
        //URL launch
        cy.visit("https://demo.opencart.com/admin/index.php")
        cy.get("#input-username").type("demo")
        cy.get("#input-password").type("demo")
        cy.get(".btn-primary").click()
        cy.get(".btn-close").click()
        cy.get("h1").should("contain", "Dashboard")
    

})

it('get values from table', function () {

    cy.get("#menu-customer").click()
    cy.get("#collapse-5 li:first-child").click()
    cy.get("h1").should("have.text", "Customers")
    cy.get("tbody tr:nth-child(1) td:nth-child(2)").then((e) =>
    {
        let x = e.text()
        cy.log(x)
    })
    for (let i=0; i<=1918; i++)
    {
        let x = parseInt(i+1);
        cy.get(".pagination li").contains(x).click()
    cy.get("tbody tr td").each((e) => 
    {
     cy.log(e.text())
    }
    )
}}
)
})