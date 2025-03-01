import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { fireEvent, render, screen } from "@testing-library/react";
import { vi } from "vitest";

import { useGetProductList } from "@/hooks/useGetProductListQuery";
import { FilterValue } from "@/types";

import ProductList from "../ProductList";

vi.mock("@/hooks/useGetProductListQuery");

const createWrapper = () => {
  const queryClient = new QueryClient();
  return ({ children }: { children: React.ReactNode }) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

describe("ProductList", () => {
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
  const onChangeFilter = vi.fn();

  it("should render loading state initially", () => {
    (useGetProductList as vi.Mock).mockReturnValue({
      data: { pages: [] },
      isLoading: true,
      isFetching: false,
      fetchNextPage: vi.fn(),
      isFetchingNextPage: false,
      hasNextPage: false,
    });

    render(
      <ProductList
        filter={filter}
        searchValue={searchValue}
        onChangeFilter={onChangeFilter}
      />,
      { wrapper: createWrapper() },
    );

    expect(screen.getAllByTestId("card-item-skeleton")).toHaveLength(20);
  });

  it("should render product list", () => {
    (useGetProductList as vi.Mock).mockReturnValue({
      data: {
        pages: [
          [
            {
              id: 1,
              title: "Laptop",
              author: {
                avatar: "avatar",
                firstName: "firstName",
                lastName: "lastName",
                onlineStatus: "onlineStatus",
              },
            },
          ],
        ],
      },
      isLoading: false,
      isFetching: false,
      fetchNextPage: vi.fn(),
      isFetchingNextPage: false,
      hasNextPage: true,
    });

    render(
      <ProductList
        filter={filter}
        searchValue={searchValue}
        onChangeFilter={onChangeFilter}
      />,
      { wrapper: createWrapper() },
    );

    expect(screen.getByText(/laptop/i)).toBeInTheDocument();
  });

  it("should handle empty product list", () => {
    (useGetProductList as vi.Mock).mockReturnValue({
      data: { pages: [[]] },
      isLoading: false,
      isFetching: false,
      fetchNextPage: vi.fn(),
      isFetchingNextPage: false,
      hasNextPage: false,
    });

    render(
      <ProductList
        filter={filter}
        searchValue={searchValue}
        onChangeFilter={onChangeFilter}
      />,
      { wrapper: createWrapper() },
    );

    expect(screen.getByText(/no results found/i)).toBeInTheDocument();
  });

  it("should fetch next page of product list", async () => {
    const fetchNextPage = vi.fn();
    (useGetProductList as vi.Mock).mockReturnValue({
      data: {
        pages: [
          [
            {
              id: 1,
              name: "Laptop",
              author: {
                avatar: "avatar",
                firstName: "firstName",
                lastName: "lastName",
                onlineStatus: "onlineStatus",
              },
            },
          ],
        ],
      },
      isLoading: false,
      isFetching: false,
      fetchNextPage,
      isFetchingNextPage: false,
      hasNextPage: true,
    });

    render(
      <ProductList
        filter={filter}
        searchValue={searchValue}
        onChangeFilter={onChangeFilter}
      />,
      { wrapper: createWrapper() },
    );

    fireEvent.click(screen.getByText(/view more/i));
    expect(fetchNextPage).toHaveBeenCalled();
  });
});
