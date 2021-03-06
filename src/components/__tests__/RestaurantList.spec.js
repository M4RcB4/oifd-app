import React from "react";
// Using a named import to ensure we are getting the unnconnected component
import { render } from "@testing-library/react";
import { RestaurantList } from "../RestaurantList";

describe("RestaurantList", () => {
  const restaurants = [
    { id: 1, name: "Sushi Place" },
    { id: 2, name: "Pizza Place" },
  ];
  let loadRestaurants;
  let context;

  beforeEach(() => {
    // Since this is a unit test we don't want to connect to the redux store
    loadRestaurants = jest.fn().mockName("loadRestaurants");

    context = render(
      <RestaurantList
        loadRestaurants={loadRestaurants}
        restaurants={restaurants}
      />
    );
  });

  it("loads restaurants on first render", () => {
    expect(loadRestaurants).toHaveBeenCalled();
  });

  it("displays the restaurants", () => {
    const { queryByText } = context;

    expect(queryByText("Sushi Place")).not.toBeNull();
    expect(queryByText("Pizza Place")).not.toBeNull();
  });
});
