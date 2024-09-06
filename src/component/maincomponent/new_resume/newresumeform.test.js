import { render, screen } from "@testing-library/react";
import NewResumeForm from "./NewResumeForm";

describe("unit test of NewResumeForm", () => {
  test("should check the element", () => {
    render(<NewResumeForm />);
    expect(screen.getByLabelText("User Name")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Enter your name")).toBeInTheDocument();
    expect(screen.getByLabelText("User Email")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Enter your Email")).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText("Position Apply For")
    ).toBeInTheDocument();
    expect(screen.getByLabelText("Phone Number(Primary)")).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText("Enter your primary Number")
    ).toBeInTheDocument();

    expect(
      screen.getByLabelText("Phone Number(secondary)")
    ).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText("Enter your secondary Number")
    ).toBeInTheDocument();
    expect(screen.getByLabelText("Enter Facebook Link")).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText("Enter social media link 1")
    ).toBeInTheDocument();
    expect(screen.getByLabelText("Enter Linkedin Link")).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText("Enter social media link 2")
    ).toBeInTheDocument();
    expect(screen.getByLabelText("Enter github Link")).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText("Enter Github link")
    ).toBeInTheDocument();
    expect(screen.getByLabelText("Enter instagram Link")).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText("Enter instagram link")
    ).toBeInTheDocument();
    expect(
      screen.getByLabelText("Enter your project Name 1")
    ).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText("Enter your First Project Name")
    ).toBeInTheDocument();
    expect(
      screen.getByLabelText("Enter your 1st project Description")
    ).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText("Project Description One")
    ).toBeInTheDocument();
    expect(
      screen.getByLabelText("Enter your 1st project tech stack")
    ).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText("Project Tech stack 1")
    ).toBeInTheDocument();
    expect(
      screen.getByLabelText("Enter your project Name 2")
    ).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText("Enter your Second Project Name")
    ).toBeInTheDocument();
    expect(
      screen.getByLabelText("Enter your 2st project Description")
    ).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText("Project Description Two")
    ).toBeInTheDocument();
    expect(
      screen.getByLabelText("Enter your 2st project tech stack")
    ).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText("Project Tech stack 2")
    ).toBeInTheDocument();
    expect(
      screen.getByLabelText("Enter your project Name 3")
    ).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText("Enter your Third Project Name")
    ).toBeInTheDocument();
    expect(
      screen.getByLabelText("Enter your 3st project Description")
    ).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText("Project Description Three")
    ).toBeInTheDocument();
    expect(
      screen.getByLabelText("Enter your 3st project tech stack")
    ).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText("Enter your Education")
    ).toBeInTheDocument();

    expect(
      screen.queryByRole("button", {
        name: "-",
      })
    ).not.toBeInTheDocument();
    expect(
      screen.getByRole("button", {
        name: "Submit",
      })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", {
        name: "Reset",
      })
    ).toBeInTheDocument();
  });
});
