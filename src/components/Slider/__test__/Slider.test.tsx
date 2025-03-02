import { render, screen } from "@testing-library/react";

import Slider from "../Slider";

describe("Slider Component", () => {
  it("renders the title when provided", () => {
    render(<Slider range title="Test Title" />);
    expect(screen.getByText("Test Title")).toBeInTheDocument();
  });

  it("renders the min and max titles when provided", () => {
    render(<Slider range minTitle="Min" maxTitle="Max" />);
    expect(screen.getByText("Min")).toBeInTheDocument();
    expect(screen.getByText("Max")).toBeInTheDocument();
  });
});
