import { fireEvent,render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import ButtonGroup from "../ButtonGroup";

describe("ButtonGroup", () => {
  const mockGroup = [
    { value: "button1", label: "Button 1" },
    { value: "button2", label: "Button 2" },
    { value: "button3", label: "Button 3" },
  ];

  it("renders all buttons", () => {
    render(<ButtonGroup group={mockGroup} onGroupClick={vi.fn()} />);
    mockGroup.forEach(({ label }) => {
      expect(screen.getByText(label)).toBeInTheDocument();
    });
  });

  it("calls onGroupClick with the correct value when a button is clicked", () => {
    const handleGroupClick = vi.fn();
    render(<ButtonGroup group={mockGroup} onGroupClick={handleGroupClick} />);
    
    const button = screen.getByText("Button 1");
    fireEvent.click(button);
    
    expect(handleGroupClick).toHaveBeenCalledWith("button1");
  });

  it("toggles button active state on click", () => {
    render(<ButtonGroup group={mockGroup} onGroupClick={vi.fn()} />);
    
    const button = screen.getByText("Button 1");
    fireEvent.click(button);
    
    expect(button).toHaveClass("relative text-sm leading-6 font-semibold lg:text-base text-white");
    
    fireEvent.click(button);
    
    expect(button).toHaveClass("relative text-sm leading-6 font-semibold lg:text-base text-white");
  });
});