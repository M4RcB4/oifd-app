import React, { useEffect } from "react";

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

export default RestaurantList;