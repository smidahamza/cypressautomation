class signup {
  setName(UserA) {
    cy.get("[placeholder='Name']").type(UserA);
  }
  setEmail(EmailAdd) {
    cy.get("[data-qa='signup-email']").type(EmailAdd);
  }
  ClickSignUp(loc) {
    cy.get(loc).click();
  }
  setTitle(loc) {
    cy.get(loc).check();
  }
  setPassword(password) {
    cy.get("#password").type(password);
  }
  setdays(day) {
    cy.get("#days").select(day);
  }
  setmonths(month) {
    cy.get("#months").select(month);
  }
  setyears(year) {
    cy.get("#years").select(year);
  }
  setCheckBoxData(loc) {
    cy.get(loc).check();
  }
  setFirstName(firstname) {
    cy.get("#first_name").type(firstname);
  }
  setLastName(lastname) {
    cy.get("#last_name").type(lastname);
  }
  setCompany(company) {
    cy.get("#company").type(company);
  }
  setAddress(address) {
    cy.get("#address1").type(address);
  }
  setCountry(country) {
    cy.get("#country").select(country);
  }
  setState(state) {
    cy.get("#state").type(state);
  }
  setCity(city) {
    cy.get("#city").type(city);
  }
  setZipcode(zipcode) {
    cy.get("#zipcode").type(zipcode);
  }
  setMobile(mobileNumber) {
    cy.get("#mobile_number").type(mobileNumber);
  }
  ClickValide(loc) {
    cy.get(loc).click();
  }
}
export default signup;
