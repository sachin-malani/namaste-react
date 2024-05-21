import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react";
import RestaurantMenu from "../RestaurantMenu";
import MOCK_DATA from "../../../__mocks__/restaurantMenu.json";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import Cart from "../Cart";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  })
);

beforeEach(async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    );
  });
});

it("Should load restaurant Menu Component", async () => {
  const accordionHeader = screen.getByText("Desserts (9)");
  expect(accordionHeader).toBeInTheDocument();
});

it("Cart should be initially empty", async () => {
  const cart = screen
    .getByRole("link", { name: /shopping-cart--v1/i })
    .querySelector("span");
  expect(cart).toBeEmptyDOMElement();
});

it("Should add items to cart and update cart count", async () => {
  const accordionHeader = screen.getByText("Desserts (9)");
  fireEvent.click(accordionHeader);

  const addBtns = screen.getAllByRole("button", { name: "Add" });
  fireEvent.click(addBtns[0]);

  const cart = screen
    .getByRole("link", { name: /shopping-cart--v1/i })
    .querySelector("span");
  expect(cart).toHaveTextContent("1");

  fireEvent.click(addBtns[0]);
  expect(cart).toHaveTextContent("2");

  const clearBtn = screen.getByRole("button", { name: "Clear Cart" });
  fireEvent.click(clearBtn);
});

it("Should show correct number of items in cart", async () => {
  const accordionHeader = screen.getByText("Desserts (9)");
  fireEvent.click(accordionHeader);

  const addBtns = screen.getAllByRole("button", { name: "Add" });
  fireEvent.click(addBtns[0]);
  fireEvent.click(addBtns[0]);

  const cart = screen.getByRole("link", { name: /shopping-cart--v1/i });
  fireEvent.click(cart);

  const cartItems = screen.getAllByTestId("cart");
  expect(cartItems.length).toBe(2);
});
