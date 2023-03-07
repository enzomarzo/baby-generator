import { render, fireEvent, screen } from "@testing-library/react";
import Content from "./Content";
import Card from "../common/card/Card";

jest.mock("../hooks/useBabyNames", () => ({
  __esModule: true,
  default: jest.fn(() => ({
    babyGirls: [["1", "F", "2020", "Olivia", "1200", "1"]],
    babyBoys: [["1", "M", "2020", "Liam", "1300", "2"]],
    error: null
  }))
}));

describe("Content component", () => {
  test("dont render the card when the page is loaded for the first time", () => {
    render(<Content />);
    expect(screen.queryByAltText("baby")).toBeNull();
  });

  test("renders the gender buttons", () => {
    render(<Content />);
    expect(screen.getByText("BOY")).toBeInTheDocument();
    expect(screen.getByText("GIRL")).toBeInTheDocument();
  });

  test("chooses a random baby girl name when the girl button is clicked", () => {
    render(<Content />);
    fireEvent.click(screen.getByText("GIRL"));
    expect(screen.queryByAltText("baby")).toBeInTheDocument();
    expect(screen.getByText("OLIVIA")).toBeInTheDocument();
  });

  test("chooses a random baby boy name when the boy button is clicked", () => {
    render(<Content />);
    fireEvent.click(screen.getByText("BOY"));
    expect(screen.queryByAltText("baby")).toBeInTheDocument();
    expect(screen.getByText("LIAM")).toBeInTheDocument();
  });
});
