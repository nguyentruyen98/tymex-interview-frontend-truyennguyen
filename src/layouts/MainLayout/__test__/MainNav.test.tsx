import { render } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router";

import { HEADER_MENU } from "@/constants";

import MainNav from "../MainNav";

describe("MainNav", () => {
  it("renders all menu items", () => {
    const { getByText } = render(
      <MemoryRouter>
        <MainNav />
      </MemoryRouter>,
    );

    HEADER_MENU.forEach(({ label }) => {
      expect(getByText(label)).toBeInTheDocument();
    });
  });

  it("applies correct styles based on the current path", () => {
    const testPath = HEADER_MENU[0].path;

    const { getByText } = render(
      <MemoryRouter initialEntries={[testPath]}>
        <Routes>
          <Route path="*" element={<MainNav />} />
        </Routes>
      </MemoryRouter>,
    );

    HEADER_MENU.forEach(({ path, label }) => {
      const menuItem = getByText(label);
      if (path === testPath) {
        expect(menuItem).toHaveStyle("color: gradient");
      } else {
        expect(menuItem).toHaveStyle("color: primary");
      }
    });
  });
});
