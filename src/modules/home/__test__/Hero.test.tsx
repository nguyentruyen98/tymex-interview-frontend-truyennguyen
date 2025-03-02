import { render } from "@testing-library/react";

import Hero from "../Hero";

describe("Hero component", () => {
  it("should render the Hero component correctly", () => {
    const { getByText } = render(<Hero />);

    expect(getByText("The DJ")).toBeInTheDocument();
    expect(getByText("The DJ")).toHaveClass(
      "absolute top-1 left-7 z-40 sm:top-3 sm:left-10 xl:top-14",
    );

    expect(getByText("Assassin")).toBeInTheDocument();
    expect(getByText("Neon Guy")).toBeInTheDocument();
    expect(getByText("Mafia England")).toBeInTheDocument();
    expect(getByText("Bassketball Girl")).toBeInTheDocument();
  });
});
