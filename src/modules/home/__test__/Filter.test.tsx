import { fireEvent, render, screen } from "@testing-library/react";
import { vi } from "vitest";

import { FilterValue } from "@/types";

import Filter from "../Filter";

describe("Filter Component", () => {
  const mockFilter: FilterValue = {
    tier: "All",
    theme: "All",
    price: "All",
    time: "All",
    category: ["All"],
    page: 1,
    priceRange: [0, 200],
  };

  const mockOnResetFilter = vi.fn();
  const mockOnChangeFilter = vi.fn();
  const mockOnChangeSearch = vi.fn();
  const mockOnFilter = vi.fn();

  const setup = () => {
    render(
      <Filter
        filter={mockFilter}
        onResetFilter={mockOnResetFilter}
        onChangeFilter={mockOnChangeFilter}
        onChangeSearch={mockOnChangeSearch}
        onFilter={mockOnFilter}
      />,
    );
  };

  it("should render all filter components", () => {
    setup();
    expect(screen.getByPlaceholderText("Quick search")).toBeInTheDocument();
    expect(screen.getAllByText("PRICE")[1]).toBeInTheDocument();
    expect(screen.getAllByText("PRICE")[0]).toBeInTheDocument();
    expect(screen.getAllByText("TIER")[0]).toBeInTheDocument();
    expect(screen.getAllByText("THEME")[0]).toBeInTheDocument();
    expect(screen.getAllByText("TIME")[0]).toBeInTheDocument();
    expect(screen.getByText("Reset filter")).toBeInTheDocument();
    expect(screen.getByText("Search")).toBeInTheDocument();
  });

  it("should call onChangeSearch when typing in the search input", () => {
    setup();
    const searchInput = screen.getByPlaceholderText("Quick search");
    fireEvent.change(searchInput, { target: { value: "test" } });
    expect(mockOnChangeSearch).toHaveBeenCalled();
  });

  it("should call onResetFilter when clicking the reset filter button", () => {
    setup();
    const resetButton = screen.getByText("Reset filter").closest("div");
    fireEvent.click(resetButton as HTMLDivElement);
    expect(mockOnResetFilter).toHaveBeenCalled();
  });

  it("should call onFilter when clicking the search button", () => {
    setup();
    const searchButton = screen.getByText("Search");
    fireEvent.click(searchButton);
    expect(mockOnFilter).toHaveBeenCalled();
  });
});
