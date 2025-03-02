import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { render, screen } from "@testing-library/react";
import { vi } from "vitest";

import Home from "../Home";

const createWrapper = () => {
  const queryClient = new QueryClient();
  return ({ children }: { children: React.ReactNode }) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

vi.mock("@/modules/home/Filter", () => ({
  default: () => <p>Filter</p>,
}));

vi.mock("@/modules/home/Graph", () => ({
  default: () => <p>Graph</p>,
}));

vi.mock("@/modules/home/ProductList", () => ({
  default: () => <p>ProductList</p>,
}));

vi.mock("@/modules/home/Hero", () => ({
  default: () => <p>Hero</p>,
}));

describe("Home Page", () => {
  it("renders the Hero component", () => {
    render(<Home />, { wrapper: createWrapper() });
    const heroElement = screen.getByText(/Hero/i);
    expect(heroElement).toBeInTheDocument();
  });

  it("renders the Filter component", () => {
    render(<Home />, { wrapper: createWrapper() });
    const filterElement = screen.getByText(/Filter/i);
    expect(filterElement).toBeInTheDocument();
  });

  it("renders the ProductList component", () => {
    render(<Home />, { wrapper: createWrapper() });
    const productListElement = screen.getByText(/ProductList/i);
    expect(productListElement).toBeInTheDocument();
  });

  it("renders the Graph component", () => {
    render(<Home />, { wrapper: createWrapper() });
    const graphElement = screen.getByText(/Graph/i);
    expect(graphElement).toBeInTheDocument();
  });
});
