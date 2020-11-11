import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import restaurantsReducer from "../restaurants/reducers";
import { loadRestaurants } from "../restaurants/actions";

describe("restaurants", () => {
  describe("loadresturants action", () => {
    it("stores the restaurants", async () => {
      // Avoiding making HTTP request directly to store. Async to allowing stubbing. Not sure why async?
      const records = [
        { id: 1, name: "Sushi Place" },
        { id: 2, name: "Pizza Place" },
      ];

      const api = {
        loadRestaurants: () => Promise.resolve(records),
      };

      /* We'll use a real Redux store to run our tests through. That way we 
      are testing our thunks, action creators, and reducers in integration. */
      const initialState = {
        records: [],
      };

      /* use a real Redux store to run our tests through. That way we are 
      testing our thunks, action creators, and reducers in integration. */

      /* we will only pass in the restaurant reducer. The full application may
      have other reducers, but we are keeping our test narrowed to just the 
      restaurant reducer. 
      
      .withExtraArgument() method allows you to pass an additional argument at 
      setup time that will be available to all thunk functions. This allows us 
      to inject our API. We could also use Jest's module mocking to do this, 
      but this makes the dependency a bit more explicit.*/
      const store = createStore(
        restaurantsReducer,
        initialState,
        applyMiddleware(thunk.withExtraArgument(api))
      );

      await store.dispatch(loadRestaurants());

      expect(store.getState().records).toEqual(records);
    });
  });
});
