describe('Listing Restaurants', () => {
    it('shows restaurants from the server', () => {
        const sushiPlace = 'Sushi Place';
        const pizzaPlace = 'Pizza Place';
        const aPIKey = 'wOnZaHudSV9lvHDqJkLYSpdpP7ahSeCJ'

        cy.server({force404: true});

        cy.route({
            method: 'GET',
            url: `https://outside-in-dev-api.herokuapp.com/${aPIKey}/restaurants`,
            response: [
                {id: 1, name: sushiPlace},
                {id: 2, name: pizzaPlace},
            ],
        });

        cy.visit('/');
        cy.wait(1000);
        cy.contains(sushiPlace);
        cy.contains(pizzaPlace);
    });
});