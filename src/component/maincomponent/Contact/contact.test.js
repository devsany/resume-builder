import { fireEvent, render, screen } from "@testing-library/react";
import Contact from "./Contact";

describe("rendred correctly", () => {
  test("contact for all statics component", () => {
    render(<Contact />);
    expect(
      screen.getByRole("heading", {
        level: 2,
      })
    ).toBeInTheDocument();
    expect(screen.getByLabelText("Email Address")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Enter Your Email")).toBeInTheDocument();

    expect(screen.getByLabelText("Message")).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText("Enter your message")
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", {
        name: "Submit",
      })
    ).toBeInTheDocument();
    expect(screen.getByAltText("Contact Form image")).toBeInTheDocument();
  });

  test("should check the input event", () => {
    render(<Contact />);
    fireEvent.change(screen.getByPlaceholderText("Enter Your Email"), {
      target: { value: "sunny@gmail.com" },
    });
    fireEvent.change(screen.getByPlaceholderText("Enter your message"), {
      target: { value: "This is the message section" },
    });
  });
});
