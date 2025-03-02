import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router";

import Header from "../Header";

describe("Header", () => {
  const { getByRole } = render(
    <MemoryRouter>
      <Header />
    </MemoryRouter>,
  );

  it("renders the Connect Wallet button", () => {
    expect(
      getByRole("button", { name: /connect wallet/i }),
    ).toBeInTheDocument();
  });
});
