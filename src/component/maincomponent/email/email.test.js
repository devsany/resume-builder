import { render, screen } from "@testing-library/react";
import Email from "./Email";

describe("unit test for email component", () => {
  test("should check element", () => {
    render(<Email />);
    expect(
      screen.getByText("Build your Application and send to the User")
    ).toBeInTheDocument();

    expect(
      screen.getByRole("heading", {
        level: 2,
      })
    ).toBeInTheDocument();
  });
});
