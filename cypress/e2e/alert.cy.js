/*describe('check button alert', () => {
    it('passes', () => {
      cy.visit('http://the-internet.herokuapp.com/javascript_alerts')
      cy.get('button[onclick="jsAlert()"]').should("be.visible")
      //cy.get('button[onclick="jsAlert()"]').click()
      cy.on('window:alert', (e) => {
        expect(e).contains("I am a JS Alert")
      })
 
     
    });
 
})

describe('Alert Example', () => {
    it('displays alert dialog', () => {
      cy.visit('https://testautomationpractice.blogspot.com')
      
      // Intercept the alert dialog
      cy.on('window:alert', (str) => {
        expect(str).to.equal('Hello, world!')
      })
  
      // Trigger the alert dialog
      cy.get('button').click()
    })
  })

  describe('check button alert', () => {
    it('passes', () => {
      cy.visit('https://testautomationpractice.blogspot.com/')
      cy.get('button[onclick="myFunctionAlert()"]').should("be.visible")
      cy.get('button[onclick="myFunctionAlert()"]').click()
      cy.window().then((win) => {
      cy.stub(win, 'alert').as('alert')
    })

    // Triggering the alert
    cy.get('button').click()

    // Waiting for the alert to be called and asserting its message
    cy.get('@alert').should('be.calledWith', 'I am an alert box!')
    });
     
 
     
    });


describe('check button alert', () => {
    it('passes', () => {
      cy.visit('http://the-internet.herokuapp.com/javascript_alerts')
      cy.get('button[onclick="jsAlert()"]').should("be.visible")
      cy.get('button[onclick="jsAlert()"]').click()
      cy.on('window:alert', (e) => {
        expect(e).contains("I am a JS Alert")
      })
      cy.get("#result").should("have.text","You successfully clicked an alert")
     
    });
    it('passes', () => {
        cy.visit('http://the-internet.herokuapp.com/javascript_alerts')
        cy.get('button[onclick="jsConfirm()"]').should("be.visible")
        cy.get('button[onclick="jsConfirm()"]').click()
       
        cy.on('window:confirm', (e) => {
             expect(e).contains("I am a JS Confirm")
        })
        cy.on('window:confirm', () => false)
        cy.get("#result").should("have.text","You clicked: Cancel")
       
      });
    })*/

    describe('premier test', () => {
 
        it("Scenario 1", function () {
          //URL launch
          cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
          //handling prompt alert
         
          cy.window().then(function(p){
             //stubbing prompt window
             cy.get(':nth-child(3) > button').click()
             cy.wait(3000)
       
             cy.stub(p, "prompt").returns("cypress");
             cy.on('window:confirm', () => false);  //accept by Cancel button
       
             // click on Click for JS Prompt button
             // verify application message on clicking on OK
             cy.get('#result').contains('You entered: cypress')
          });
       });
      })