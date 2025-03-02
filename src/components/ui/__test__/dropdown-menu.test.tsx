import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../dropdown-menu";

describe("DropdownMenu", () => {
  it("renders the dropdown menu trigger", () => {
    render(
      <DropdownMenu>
        <DropdownMenuTrigger>Open Menu</DropdownMenuTrigger>
      </DropdownMenu>,
    );
    expect(screen.getByText("Open Menu")).toBeInTheDocument();
  });

  it("opens the dropdown menu on trigger click", async () => {
    render(
      <DropdownMenu>
        <DropdownMenuTrigger>Open Menu</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>Item 1</DropdownMenuItem>
          <DropdownMenuItem>Item 2</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>,
    );
    await waitFor(() => userEvent.click(screen.getByText("Open Menu")));

    await waitFor(() => {
      expect(screen.getByText("Item 1")).toBeInTheDocument();
      expect(screen.getByText("Item 2")).toBeInTheDocument();
    });
  });

  it("closes the dropdown menu on item click", async () => {
    render(
      <DropdownMenu>
        <DropdownMenuTrigger>Open Menu</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>Item 1</DropdownMenuItem>
          <DropdownMenuItem>Item 2</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>,
    );

    await waitFor(() => userEvent.click(screen.getByText("Open Menu")));
    await waitFor(() => userEvent.click(screen.getByText("Item 1")));
    await waitFor(() =>
      expect(screen.queryByText("Item 1")).not.toBeInTheDocument(),
    );
    await waitFor(() =>
      expect(screen.queryByText("Item 2")).not.toBeInTheDocument(),
    );
  });
});
