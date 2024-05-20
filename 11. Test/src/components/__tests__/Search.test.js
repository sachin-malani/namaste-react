import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import appStore from "../../utils/appStore";
import MOCK_DATA from "../../../__mocks__/restaurantList.json";
import { Provider } from "react-redux";
import { act } from "react";
import { BrowserRouter } from "react-router-dom";
import { execPath } from "process";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("Should search restaurant list for burger text input", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Body />
        </Provider>
      </BrowserRouter>
    );
  });

  const cardsBeforeSearch = screen.getAllByTestId("resCard");
  expect(cardsBeforeSearch.length).toBe(20);

  const searchBtn = screen.getByRole("button", { name: "search" });
  const searchInput = screen.getByTestId("searchInput");

  fireEvent.change(searchInput, { target: { value: "burger" } });
  fireEvent.click(searchBtn);

  const cardsAfterSearch = screen.getAllByTestId("resCard");
  expect(cardsAfterSearch.length).toBe(2);
});

it("Should render top rated restaurant", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Body />
        </Provider>
      </BrowserRouter>
    );
  });

  const cardsBeforeFilter = screen.getAllByTestId("resCard");
  expect(cardsBeforeFilter.length).toBe(20);

  const btn = screen.getByRole("button", {name: "Top Rated"});
  fireEvent.click(btn);

  const cardsAfterFilter = screen.getAllByTestId("resCard");
  expect(cardsAfterFilter.length).toBe(2);

});
