import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router";

import Marketplace from "../Marketplace";

describe("Marketplace Page", () => {
  it("renders the DummyPage component with the correct title", () => {
    render(
      <BrowserRouter>
        <Marketplace />
      </BrowserRouter>,
    );
    const titleElement = screen.getByText(/Marketplace/i);
    expect(titleElement).toBeInTheDocument();
  });
});
