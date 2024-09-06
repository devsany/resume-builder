import { render, screen } from "@testing-library/react";
import ShowSingleResume from "./ShowSingleResume";
test("should first", () => {
  render(<ShowSingleResume />);
  expect(screen.getByRole("button",{
    name:'Print'
  })).toBeInTheDocument();
});
