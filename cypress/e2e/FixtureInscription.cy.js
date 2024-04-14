import signup from "../PageObjects_1/SignUpUser";
describe("Fixture Inscription exemple", () => {
  it("Fixture Inscription exemple", () => {
    cy.visit("https://automationexercise.com/login");
    cy.get(".signup-form h2").should("have.text", "New User Signup!");
    cy.fixture("inscription").then((Data) => {
      const usr = new signup();
      usr.setName(Data.name);
      usr.setEmail(Data.email);
      usr.ClickSignUp(Data.buttonSignup);
      // cy.get("[placeholder='Name']").type(Data.name);
      //cy.get("[data-qa='signup-email']").type(Data.email)
      //cy.get(Data.buttonSignup).click()
      //cy.get("#id_gender1[value='${Data.radiodata}']").check()
      usr.setTitle(Data.radiodata);
      usr.setPassword(Data.password);
      usr.setdays(Data.selectedDay);
      usr.setmonths(Data.selectedMonth);
      usr.setyears(Data.selectedyear);
      usr.setCheckBoxData(Data.checkboxdata);
      cy.get("#optin").uncheck();
      usr.setFirstName(Data.firstname);
      usr.setLastName(Data.lastname);
      usr.setCompany(Data.company);
      usr.setAddress(Data.address)
      usr.setCountry(Data.selectCountry)
      usr.setState(Data.state)
      usr.setCity(Data.city)
      usr.setZipcode(Data.zipcode)
      usr.setMobile(Data.mobileNumber)
      usr.ClickValide(Data.buttonCreateAcount)
      

      //cy.get(Data.radiodata).check()
      // cy.get("#password").type(Data.password)
      // cy.get("#days").select(Data.selectedDay)
      // cy.get("#months").select(Data.selectedMonth)
      // cy.get("#years").select(Data.selectedyear)
      // cy.get(Data.checkboxdata).check()
      //cy.get("#optin").uncheck();
      // cy.get("#first_name").type(Data.firstname)
      // cy.get("#last_name").type(Data.lastname)
      // cy.get("#company").type(Data.company)
      // cy.get("#address1").type(Data.address)
      // cy.get("#country").select(Data.selectCountry)
      // cy.get("#state").type(Data.state)
      // cy.get("#city").type(Data.city)
      // cy.get("#zipcode").type(Data.zipcode)
      // cy.get("#mobile_number").type(Data.mobileNumber)
      //cy.get('.btn.btn-default').eq(0).click({ multiple: true })
      //cy.get(Data.buttonCreateAcount).click();
      //cy.get(Data.continuebutton).click();
      cy.get(Data.logoutbutton).click();
    });
  });
});
