import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import restaurantsReducer from "../restaurants/reducers";
import { loadRestaurants } from "../restaurants/actions";

describe("restaurants", () => {
  describe("loadresturants action", () => {
    /* Integration test mocking the API to test the...
       [loadRestaurants asyc action, store restaurants action creator, the reducer] */
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
    /* Our test interacts with the store the way the rest of our application 
    does: by dispatching async actions and then observing state changes. Just 
    like the rest of our application, our test doesn't know or care about the 
    STORE_RESTAURANTS action type; it treats it as an implementation detail. 
    This gives us greater flexibility to refactor our store; for example, we 
    could change the way the actions that loadRestaurants dispatches are set 
    up. Our tests would continue to pass as long as the action type and state 
    stayed the same, which is fittingly exactly the contract that the rest of 
    our application relies on as well.
    
    Another benefit of testing the store from the outside is ensuring that all 
    the pieces work together. If we were testing the loadRestaurants async action, 
    storeRestaurants action creator, and reducer separately from one another, 
    they might work individually, but not work together. For example, maybe the 
    names of properties in the action object returned by storeRestaurants aren't 
    the same names as the properties the reducer looks for in a STORE_RESTAURANTS 
    action. Our test exercises the async action, action creator, and reducer in 
    integration, ensuring that if they aren't working together, a unit test will 
    fail. If we weren't testing this way, only an E2E test would catch this 
    problem—and then only if the problem is in one of the main flows that our E2E 
    test covers, not our edge cases. */
  });
});
