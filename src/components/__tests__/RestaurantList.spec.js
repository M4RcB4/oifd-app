import React from "react";
// Using a named import to ensure we are getting the unnconnected component
import { render } from "@testing-library/react";
import { RestaurantList } from "../RestaurantList";

describe("RestaurantList", () => {
  it("loads restaurants on first render", () => {
    // Since this is a unit test we don't want to connect to the redux store
    const loadRestaurants = jest.fn().mockName("loadRestaurants");
    const restaurants = [];

    render(
      <RestaurantList
        loadRestaurants={loadRestaurants}
        restaurants={restaurants}
      />
    );

    expect(loadRestaurants).toHaveBeenCalled();
  });

  it("displays the restaurants", () => {
    const noop = () => {};
    const restaurants = [
      { id: 1, name: "Sushi Place" },
      { id: 2, name: "Pizza Place" },
    ];

    const { queryByText } = render(
      <RestaurantList loadRestaurants={noop} restaurants={restaurants} />,
    );

    expect(queryByText("Sushi Place")).not.toBeNull();
    expect(queryByText("Pizza Place")).not.toBeNull();
  });
});
