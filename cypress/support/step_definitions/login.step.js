import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("the user is on the home page", () => {
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
});

When("the user enters {string} and {string}", (username, password) => {
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(username);
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type(password);
});

When("the user clicks on login button", () => {
    cy.get('.oxd-button').click();
});


Then("the user is on the dashboard page", () => {
    cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('be.visible');
});

