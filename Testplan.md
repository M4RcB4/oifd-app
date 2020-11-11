
<br />

## ----------------------------------------------------
## -------------- Testing @ A Glance ------------------
## ----------------------------------------------------

<br />

---

<br />

## Testing Technologies Used

### Cypress - E2E tests

### Jest - Component/Unit testing

<br />

---

<br />

## E2E Tests
_Tests are run in the browser. Focus on a string of actions or a "Journey" that a user may take through the app and makes assertions along the way._

###   Cypress funtional Tests
The backend is mocked out using the ```cy.route()``` API. 
- Restaurants List on Homepage
  - Test - Resturant names show as expected in the browser(Mocking out backend/API)
  
  <br />
  <br />
## Unit tests
_Commonly found in the directory they are targeting with a folder name of ```__tests__```._

### --- Component Tests
Checking the functionality with very few dependancies through use of mocking so that tests focus only on the components logic they are targeting. 
- RestaurantList(Component)
  - Test - method is called once on render of the page
  - Test - Returns expected restaurant names(Mocking out the redux store)
  - 
### --- Testing the Store
- loadRestaurants(Action)
  - Test - stores the restaurants in the store