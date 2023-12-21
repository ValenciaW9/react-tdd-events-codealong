import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";

test("checkbox becomes checked when user clicks it", () => {
  render(<App />);

  const checkbox = screen.getByRole("checkbox", { name: /add pepperoni/i });

  userEvent.click(checkbox);

  expect(checkbox).toBeChecked();
});

test("topping appears in toppings list when checkbox is checked", () => {
  render(<App />);

  const checkbox = screen.getByRole("checkbox", { name: /add pepperoni/i });

  userEvent.click(checkbox);

  expect(screen.getByText("Pepperoni")).toBeInTheDocument();
});

test("selected topping disappears when checkbox is clicked a second time", () => {
  render(<App />);

  const checkbox = screen.getByRole("checkbox", { name: /add pepperoni/i });

  userEvent.click(checkbox);

  expect(checkbox).toBeChecked();
  expect(screen.getByText("Pepperoni")).toBeInTheDocument();

  userEvent.click(checkbox);

  expect(checkbox).not.toBeChecked();
  expect(screen.queryByText("Pepperoni")).not.toBeInTheDocument();
});