import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router";
import { vi } from "vitest";

import DummyPage from "../DummyPage";

const navigateMock = vi.fn();

vi.mock("react-router", () => ({
  ...vi.importActual("react-router"),
  useNavigate: () => navigateMock,
  BrowserRouter: ({ children }: { children: React.ReactNode }) => (
    <div>{children}</div>
  ),
}));

describe("DummyPage", () => {
  const renderComponent = (title: string) => {
    render(
      <BrowserRouter>
        <DummyPage title={title} />
      </BrowserRouter>,
    );
  };

  it("should render the title correctly", () => {
    const title = "Test";
    renderComponent(title);
    expect(screen.getByText(`${title} page`)).toBeInTheDocument();
  });

  it("should render the in-progress message", () => {
    renderComponent("Test");
    expect(
      screen.getByText("This page is in progress, please come back later"),
    ).toBeInTheDocument();
  });

  it("should navigate to home page on button click", async () => {
    renderComponent("Test");
    userEvent.click(screen.getByText("Back to homepage"));
    await waitFor(() => expect(navigateMock).toHaveBeenCalledWith("/"));
  });
});
