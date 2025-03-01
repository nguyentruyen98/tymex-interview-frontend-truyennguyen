import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { renderHook, waitFor } from "@testing-library/react";
import { vi } from "vitest";

import { getProductList } from "@/apis/getProductList";
import { FilterValue } from "@/types";

import { useGetProductList } from "../useGetProductListQuery";

vi.mock("@/apis/getProductList");

const createWrapper = () => {
  const queryClient = new QueryClient();
  return ({ children }: { children: React.ReactNode }) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

describe("useGetProductList", () => {
  const filter: FilterValue = {
    category: ["electronics"],
    price: "asc",
    theme: "Dark",
    tier: "Basic",
    time: "desc",
    page: 1,
    priceRange: [100, 500],
  };
  const searchValue = "laptop";

  it("should fetch product list successfully", async () => {
    (getProductList as jest.Mock).mockResolvedValueOnce([
      { id: 1, name: "Laptop" },
    ]);

    const { result } = renderHook(
      () => useGetProductList(filter, searchValue),
      {
        wrapper: createWrapper(),
      },
    );
    await waitFor(() =>
      expect(result.current.data.pages[0]).toEqual([{ id: 1, name: "Laptop" }]),
    );
  });

  it("should handle empty product list", async () => {
    (getProductList as jest.Mock).mockResolvedValueOnce([]);

    const { result } = renderHook(
      () => useGetProductList(filter, searchValue),
      {
        wrapper: createWrapper(),
      },
    );
    await waitFor(() => expect(result.current.data.pages[0]).toEqual([]));
  });

  it("should fetch next page of product list", async () => {
    (getProductList as jest.Mock)
      .mockResolvedValueOnce([{ id: 1, name: "Laptop" }])
      .mockResolvedValueOnce([{ id: 2, name: "Tablet" }]);

    const { result } = renderHook(
      () => useGetProductList(filter, searchValue),
      {
        wrapper: createWrapper(),
      },
    );

    waitFor(() =>
      expect(result.current.data.pages).toEqual([[{ id: 1, name: "Laptop" }]]),
    );

    result.current.fetchNextPage();

    await waitFor(() =>
      expect(result.current.data.pages).toEqual([[{ id: 2, name: "Tablet" }]]),
    );
  });
});
