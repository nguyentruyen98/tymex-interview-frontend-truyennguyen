import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import Select from "../Select";

describe("Select Component", () => {
  const options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
  ];

  it("renders the Select component with label", () => {
    render(<Select label="Test Label" options={options} />);
    expect(screen.getByText("Test Label")).toBeInTheDocument();
  });

  it("renders the Select component with placeholder", () => {
    render(<Select placeholder="Select an option" options={options} />);
    expect(screen.getByText("Select an option")).toBeInTheDocument();
  });

  it("renders with default value", () => {
    render(<Select options={options} defaultValue="option2" />);
    expect(screen.getByText("Option 2")).toBeInTheDocument();
  });

  it("renders with controlled value", () => {
    render(<Select options={options} value="option1" />);
    expect(screen.getByText("Option 1")).toBeInTheDocument();
  });
});
