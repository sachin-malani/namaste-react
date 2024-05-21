import { render, screen } from "@testing-library/react";
import { RestaurantCard, withPromotedLabel } from "../RestaurantCard";
import MOCK_DATA from "../../../__mocks__/restaurantCard.json";
import "@testing-library/jest-dom";

it("Should render RestaurantCard component with props data", () => {
  render(<RestaurantCard resData={MOCK_DATA} />);
  const restaurantName = screen.getByText("McDonald's");
  expect(restaurantName).toBeInTheDocument();
});

//Higher order component
it("Should render RestaurantCard component with promotedLabel", () => {

    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
    render(<RestaurantCardPromoted resData={MOCK_DATA} />);
    const promotedLabel = screen.getByText("Promoted");
    expect(promotedLabel).toBeInTheDocument();
  });

