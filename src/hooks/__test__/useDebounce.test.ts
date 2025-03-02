import { act, renderHook } from "@testing-library/react";
import { vi } from "vitest";

import useDebounce from "../useDebounce";

vi.useFakeTimers();

describe("useDebounce", () => {
  it("should return the initial value immediately", () => {
    const { result } = renderHook(() => useDebounce("initial", 500));
    expect(result.current).toBe("initial");
  });

  it("should debounce the value after the specified delay", () => {
    const { result, rerender } = renderHook(
      ({ value, delay }) => useDebounce(value, delay),
      {
        initialProps: { value: "initial", delay: 500 },
      },
    );

    rerender({ value: "updated", delay: 500 });

    act(() => {
      vi.advanceTimersByTime(250);
    });

    expect(result.current).toBe("initial");

    act(() => {
      vi.advanceTimersByTime(250);
    });

    expect(result.current).toBe("updated");
  });
});
