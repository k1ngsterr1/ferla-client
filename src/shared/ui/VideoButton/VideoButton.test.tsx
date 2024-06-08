import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { VideoButton } from "./index"; // Ensure the correct import path is used

describe("VideoButton", () => {
  it("renders a clickable video button with an icon", () => {
    // Mock the onClick function
    const mockOnClick = jest.fn();
    render(<VideoButton onClick={mockOnClick} />);

    // Find the button by role
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();

    // Check if clicking the button calls the onClick handler
    button.click();
    expect(mockOnClick).toHaveBeenCalled();

    // Check if the FontAwesome icon is rendered inside the button
    const icon = screen.getByTestId("fa-icon"); // Add a data-testid="fa-icon" in the icon component if possible
    expect(icon).toBeInTheDocument();
  });
});
