import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router";

import Roadmap from "../Roadmap";

describe("Roadmap Page", () => {
  it("renders the DummyPage component with the correct title", () => {
    render(
      <BrowserRouter>
        <Roadmap />
      </BrowserRouter>,
    );
    const titleElement = screen.getByText(/Roadmap/i);
    expect(titleElement).toBeInTheDocument();
  });
});
