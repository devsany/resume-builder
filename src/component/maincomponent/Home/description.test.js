import { render, screen } from "@testing-library/react";
import Description from "./Description";

describe("Title element", () => {
  test("should check the statics element of title component", () => {
    render(<Description />);
    expect(
      screen.getByText("The Best Online Resume Builder")
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        level: 2,
      })
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        "Easily create the perfect resume for any job using our best-in-class resume builder platform."
      )
    ).toBeInTheDocument();
  });
});
