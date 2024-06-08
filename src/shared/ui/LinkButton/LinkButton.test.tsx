import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import LinkButton from "./index";

describe("LinkButton", () => {
  it("renders the button with text and href", () => {
    render(<LinkButton text="Click me" href="#works" buttonType="filled" />);

    const linkButton = screen.getByRole("link", { name: "Click me" });
    expect(linkButton).toBeInTheDocument();
    expect(linkButton).toHaveClass("link link--filled");
    expect(screen.getByText("Click me")).toBeInTheDocument();
  });

  it("applies different styles based on the buttonType prop", () => {
    render(<LinkButton text="Test" href="#testing" buttonType="outline" />);
    expect(screen.getByText("Test")).toHaveClass("link link--outline");
  });
});
