import config from "../../config.js";

describe("Listing Restaurants", () => {
  it("shows restaurants from the server", () => {
    const sushiPlace = "Sushi Place";
    const pizzaPlace = "Pizza Place";
    const aPIKey = config.aPIKey;

    // Prevents cypress from allowing calls to the backend
    cy.server({ force404: true });

    // Mocks the response for the backend
    cy.route({
      method: "GET",
      url: `https://outside-in-dev-api.herokuapp.com/${aPIKey}/restaurants`,
      response: [
        { id: 1, name: sushiPlace },
        { id: 2, name: pizzaPlace },
      ],
    });

    // Asserts the resturants mocked show on the site page
    cy.visit("/");
    cy.contains(sushiPlace);
    cy.contains(pizzaPlace);
  });
});
