import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router";

import About from "../About";

describe("About Page", () => {
  it("renders the DummyPage component with the correct title", () => {
    render(
      <BrowserRouter>
        <About />
      </BrowserRouter>,
    );
    const titleElement = screen.getByText(/About/i);
    expect(titleElement).toBeInTheDocument();
  });
});
