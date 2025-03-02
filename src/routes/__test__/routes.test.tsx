import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { render } from "@testing-library/react";
import { PropsWithChildren } from "react";
import { createMemoryRouter, RouterProvider } from "react-router";
import { vi } from "vitest";

import { APP_ROUTES } from "@/constants";

import { routes } from "../routes";

const queryClient = new QueryClient();

const wrapper = ({ children }: PropsWithChildren) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

vi.mock("@/pages/About", () => ({
  default: () => <div>About page</div>,
}));

vi.mock("@/pages/Marketplace", () => ({
  default: () => <div>Marketplace page</div>,
}));

vi.mock("@/pages/Roadmap", () => ({
  default: () => <div>Roadmap page</div>,
}));

vi.mock("@/pages/OurTeam", () => ({
  default: () => <div>OurTeam page</div>,
}));

vi.mock("@/pages/Whitepaper", () => ({
  default: () => <div>Whitepaper Page</div>,
}));

vi.mock("@/pages/Home", () => ({
  default: () => <div>Home Page</div>,
}));

describe("Routes", () => {
  it("should render Home component for HOME route", () => {
    const { getByText } = render(<RouterProvider router={routes} />, {
      wrapper,
    });
    expect(getByText("Home Page")).toBeInTheDocument();
  });

  it("should render About component for ABOUT route", async () => {
    const router = createMemoryRouter(routes.routes, {
      initialEntries: [APP_ROUTES.ABOUT],
      initialIndex: 1,
    });

    const { findByText } = render(<RouterProvider router={router} />, {
      wrapper,
    });
    expect(await findByText("About page")).toBeInTheDocument();
  });

  it("should render About component for MARKETPLACE route", async () => {
    const router = createMemoryRouter(routes.routes, {
      initialEntries: [APP_ROUTES.MARKETPLACE],
      initialIndex: 1,
    });

    const { findByText } = render(<RouterProvider router={router} />, {
      wrapper,
    });
    expect(await findByText("Marketplace page")).toBeInTheDocument();
  });

  it("should render About component for OURTEAM route", async () => {
    const router = createMemoryRouter(routes.routes, {
      initialEntries: [APP_ROUTES.OUR_TEAM],
      initialIndex: 1,
    });

    const { findByText } = render(<RouterProvider router={router} />, {
      wrapper,
    });
    expect(await findByText("OurTeam page")).toBeInTheDocument();
  });

  it("should render About component for ROADMAP route", async () => {
    const router = createMemoryRouter(routes.routes, {
      initialEntries: [APP_ROUTES.ROADMAP],
      initialIndex: 1,
    });

    const { findByText } = render(<RouterProvider router={router} />, {
      wrapper,
    });
    expect(await findByText("Roadmap page")).toBeInTheDocument();
  });

  it("should render Whitepaper component for WHITEPAPER route", async () => {
    const router = createMemoryRouter(routes.routes, {
      initialEntries: [APP_ROUTES.WHITEPAPER],
      initialIndex: 1,
    });

    const { findByText } = render(<RouterProvider router={router} />, {
      wrapper,
    });
    expect(await findByText("Whitepaper Page")).toBeInTheDocument();
  });
});
