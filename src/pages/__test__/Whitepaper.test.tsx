import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router";

import Whitepaper from "../Whitepaper";

describe("Whitepaper Page", () => {
  it("renders the DummyPage component with the correct title", () => {
    render(
      <BrowserRouter>
        <Whitepaper />
      </BrowserRouter>,
    );
    const titleElement = screen.getByText(/Whitepaper/i);
    expect(titleElement).toBeInTheDocument();
  });
});
