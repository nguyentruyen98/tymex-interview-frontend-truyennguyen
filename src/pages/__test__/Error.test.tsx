import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router";

import Error from "../Error";

describe("Error Page", () => {
  it("renders the DummyPage component with the correct title", () => {
    render(
      <BrowserRouter>
        <Error />
      </BrowserRouter>,
    );
    const titleElement = screen.getByText(/Oops!/i);
    expect(titleElement).toBeInTheDocument();
  });
});
