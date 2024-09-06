import { render, screen } from "@testing-library/react";
import Title from "./Title";

test("should check the header", () => {
  render(<Title />);
  expect(screen.getByText("Complete form")).toBeInTheDocument();
  expect(
    screen.getByRole("heading", {
      level: 2,
    })
  ).toBeInTheDocument();
});
