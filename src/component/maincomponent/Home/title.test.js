import { render, screen } from "@testing-library/react";
import Title from "./Title";

describe("Title element", () => {
  test("should check the statics element of title component", () => {
    render(<Title />);
    expect(screen.getByText("Resume Builder Web-App")).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        level: 2,
      })
    ).toBeInTheDocument();
  });
});
