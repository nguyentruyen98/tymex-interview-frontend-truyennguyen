import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router";

import OurTeam from "../OurTeam";

describe("OurTeam Page", () => {
  it("renders the DummyPage component with the correct title", () => {
    render(
      <BrowserRouter>
        <OurTeam />
      </BrowserRouter>,
    );
    const titleElement = screen.getByText(/OurTeam/i);
    expect(titleElement).toBeInTheDocument();
  });
});
