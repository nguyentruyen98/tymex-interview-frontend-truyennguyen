import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router";
import { vi } from "vitest";

import MainLayout from "../MainLayout";

vi.mock("../Header", () => ({
  default: () => <div>Mocked Header</div>,
}));
vi.mock("../Footer", () => ({
  default: () => <div>Mocked Footer</div>,
}));

describe("MainLayout", () => {
  it("should render Header, Outlet, and Footer", () => {
    render(<MainLayout />, { wrapper: BrowserRouter });

    expect(screen.getByText("Mocked Header")).toBeInTheDocument();
    expect(screen.getByText("Mocked Footer")).toBeInTheDocument();
  });
});
