import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Button from "./index";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

describe("Button", () => {
  it("renders the button with text and optional icon", () => {
    render(<Button text="Click me" icon={faCoffee} buttonType="filled" />);

    const button = screen.getByRole("button", { name: "Click me" });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("button button--filled");
    expect(screen.getByText("Click me")).toBeInTheDocument();

    // Check if the icon is rendered
    const icon = screen.getByTestId("icon");
    expect(icon).toBeInTheDocument();
    expect(icon).toHaveClass("icon");
  });

  // Additional test to check button types
  it("applies different styles based on the buttonType prop", () => {
    const { rerender } = render(<Button text="Test" buttonType="outline" />);
    expect(screen.getByText("Test")).toHaveClass("button button--outline");

    rerender(<Button text="Test" buttonType="underline" />);
    expect(screen.getByText("Test")).toHaveClass("button button--underline");
  });
});
