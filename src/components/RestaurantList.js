import React, { useEffect } from "react";
import { connect } from "react-redux";
import { loadRestaurants } from "../store/restaurants/actions";

/* IMPORTANT NOTE ABOUT TESTABILITY!!!
In addition to the default export, we also do a named export of the 
component. This is because later our default export will be the RestaurantList 
connected to Redux, but we will also want access to the unconnected component 
for testing. */
export const RestaurantList = ({ loadRestaurants, restaurants }) => {
  useEffect(() => {
    loadRestaurants();
  }, [loadRestaurants]);

  return (
    <ul>
      {restaurants.map((restaurant) => (
        <li key={restaurant.id}>{restaurant.name}</li>
      ))}
    </ul>
  );
};

const mapStateToProps = (state) => ({
  restaurants: state.restaurants.records,
});

const mapDispatchToProps = { loadRestaurants };

/*Note that we are using the React-Redux connect() function rather than the newer 
hooks-based API. Redux maintainer Mark Erikson writes about the tradeoffs between 
the two React-Redux APIs, and there is not a strong recommendation to use one or
the other. Because our component testing approach involves passing props to a 
component that is unaware of Redux, the connect() function is a more natural fit. 
We could accomplish the same by creating a "connected" component that uses 
React-Redux hooks and passes the props down to the unconnected component, but there 
are few benefits to that approach over using connect().*/
export default connect(mapStateToProps, mapDispatchToProps)(RestaurantList);
