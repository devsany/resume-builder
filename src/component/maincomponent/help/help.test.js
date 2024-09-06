import { render, screen } from "@testing-library/react";
import Help from "./Help";

describe("Help component", () => {
  test("should ckeck the statics element", () => {
    render(<Help />);
    expect(screen.getByRole("heading", { level: 2 })).toBeInTheDocument();
  });
});
