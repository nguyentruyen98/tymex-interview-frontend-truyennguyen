import { renderHook } from "@testing-library/react";

import { useSearchProductList } from "../useSearchProductList";

describe("useSearchProductList", () => {
  it("should initialize with empty search value", () => {
    const { result } = renderHook(() => useSearchProductList());
    expect(result.current.deferredSearchValue).toBe("");
  });
});
