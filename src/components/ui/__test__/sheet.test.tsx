import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../sheet";

describe("Sheet component", () => {
  it("renders the Sheet component", () => {
    render(
      <Sheet>
        <SheetTrigger>Open Sheet</SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Sheet Title</SheetTitle>
            <SheetDescription>Sheet Description</SheetDescription>
          </SheetHeader>
          <SheetFooter>
            <button>Footer Button</button>
          </SheetFooter>
        </SheetContent>
      </Sheet>,
    );

    expect(screen.getByText("Open Sheet")).toBeInTheDocument();
  });

  it("opens and closes the Sheet component", async () => {
    render(
      <Sheet>
        <SheetTrigger>Open Sheet</SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Sheet Title</SheetTitle>
            <SheetDescription>Sheet Description</SheetDescription>
          </SheetHeader>
          <SheetClose>Close</SheetClose>
        </SheetContent>
      </Sheet>,
    );

    const trigger = screen.getByText("Open Sheet");
    await userEvent.click(trigger);

    expect(screen.getByText("Sheet Title")).toBeInTheDocument();
    expect(screen.getByText("Sheet Description")).toBeInTheDocument();

    const closeButton = screen.getAllByText("Close");

    await userEvent.click(closeButton[0]);

    expect(screen.queryByText("Sheet Title")).not.toBeInTheDocument();
    expect(screen.queryByText("Sheet Description")).not.toBeInTheDocument();
  });
});
