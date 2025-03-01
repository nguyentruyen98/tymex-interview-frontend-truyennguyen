import { act, renderHook } from "@testing-library/react";

import { useFilterProductList } from "../useFilterProductList";

describe("useFilterProductList", () => {
  it("should initialize with default filter values", () => {
    const { result } = renderHook(() => useFilterProductList());

    expect(result.current.filter).toEqual({
      tier: "All",
      theme: "All",
      time: "All",
      price: "All",
      category: [],
      page: 0,
      priceRange: [0, 200],
    });
    expect(result.current.filterOnSearch).toEqual({
      tier: "All",
      theme: "All",
      time: "All",
      price: "All",
      category: [],
      page: 0,
      priceRange: [0, 200],
    });
  });

  it("should update filter on search when handleChangeFilter is called with category", () => {
    const { result } = renderHook(() => useFilterProductList());

    act(() => {
      result.current.handleChangeFilter("Electronics", "category");
    });

    expect(result.current.filterOnSearch.category).toEqual(["Electronics"]);

    act(() => {
      result.current.handleChangeFilter("Electronics", "category");
    });

    expect(result.current.filterOnSearch.category).toEqual([]);
  });

  it("should update filter when handleChangeFilter is called with price", () => {
    const { result } = renderHook(() => useFilterProductList());

    act(() => {
      result.current.handleChangeFilter("asc", "price");
    });

    expect(result.current.filter.price).toEqual("asc");
    expect(result.current.filter.time).toEqual("All");
  });

  it("should update filter when handleChangeFilter is called with time", () => {
    const { result } = renderHook(() => useFilterProductList());

    act(() => {
      result.current.handleChangeFilter("desc", "time");
    });

    expect(result.current.filter.time).toEqual("desc");
    expect(result.current.filter.price).toEqual("All");
  });

  it("should update filterOnSearch when handleFilter is called", () => {
    const { result } = renderHook(() => useFilterProductList());

    act(() => {
      result.current.handleChangeFilter("Electronics", "category");
      result.current.handleFilter();
    });

    expect(result.current.filterOnSearch).toEqual({
      ...result.current.filter,
      page: 0,
      category: [],
    });
  });

  it("should reset filter when handleResetFilter is called", () => {
    const { result } = renderHook(() => useFilterProductList());

    act(() => {
      result.current.handleChangeFilter("Electronics", "category");
      result.current.handleResetFilter();
    });

    expect(result.current.filter).toEqual({
      tier: "All",
      theme: "All",
      time: "All",
      price: "All",
      category: [],
      page: 0,
      priceRange: [0, 200],
    });
    expect(result.current.filterOnSearch).toEqual({
      tier: "All",
      theme: "All",
      time: "All",
      price: "All",
      category: [],
      page: 0,
      priceRange: [0, 200],
    });
  });
});
