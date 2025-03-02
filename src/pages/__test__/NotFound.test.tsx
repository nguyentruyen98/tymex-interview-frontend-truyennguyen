import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router";

import NotFound from "../NotFound";

describe("Not found Page", () => {
  it("renders the DummyPage component with the correct title", () => {
    render(
      <BrowserRouter>
        <NotFound />
      </BrowserRouter>,
    );
    const titleElement = screen.getByText(/404/i);
    expect(titleElement).toBeInTheDocument();
  });
});
