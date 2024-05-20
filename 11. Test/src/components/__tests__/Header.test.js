import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import appStore from "../../utils/appStore";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it("Should render header component with login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  //   const loginBtn = screen.getByRole("button");
  //   const loginBtn = screen.getByText("Login");
  const loginBtn = screen.getByRole("button", { name: "Login" });
  expect(loginBtn).toBeInTheDocument();
});

it("Should render header component with About us", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  const cartItems = screen.getByText("About Us");
  expect(cartItems).toBeInTheDocument();
});

it("Should render header component with About us using regex", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  const cartItems = screen.getByText(/About/);
  expect(cartItems).toBeInTheDocument();
});

it("Should render header component with About us using regex", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  const loginBtn = screen.getByRole("button");
  
  fireEvent.click(loginBtn);

  const logoutBtn = screen.getByRole("button", {name: "Logout"});
  expect(logoutBtn).toBeInTheDocument();
});
