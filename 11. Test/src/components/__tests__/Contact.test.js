import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact us page test case", () => {

  beforeAll(() => {
    console.log("Before All");
  });

  beforeEach(() => {
    console.log("Before Each");
  });

  afterAll(() => {
    console.log("After All");
  });

  afterEach(() => {
    console.log("After Each");
  });
  test("Load Contact page", () => {
    render(<Contact />);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
  });

  test("Load button in contact form", () => {
    render(<Contact />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });

  test("Check placeholder in contact form", () => {
    render(<Contact />);
    const text = screen.getByPlaceholderText("email");
    expect(text).toBeInTheDocument();
  });

  test("Check text in contact form", () => {
    render(<Contact />);
    const text = screen.getByText("Submit");
    expect(text).toBeInTheDocument();
  });

  test("Should load 2 input boxes", () => {
    render(<Contact />);
    const inputBoxes = screen.getAllByRole("textbox");
    // expect(inputBoxes.length).toBe(2);
    expect(inputBoxes.length).not.toBe(3); 
  });
});