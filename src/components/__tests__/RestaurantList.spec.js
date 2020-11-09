import React from "react";
// Using a named import to ensure we are getting the unnconnected component
import { render } from "@testing-library/react";
import { RestaurantList } from "../RestaurantList";

describe("RestaurantList", () => {
  it("loads restaurants on first render", () => {
    // Since this is a unit test we don't want to connect to the redux store
    const loadRestaurants = jest.fn().mockName("loadRestaurants");

    render(<RestaurantList loadRestaurants={loadRestaurants} />);

    expect(loadRestaurants).toHaveBeenCalled();
  });
});
