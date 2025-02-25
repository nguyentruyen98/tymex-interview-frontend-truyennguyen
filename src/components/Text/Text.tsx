import { Slot } from "@radix-ui/react-slot";
import { memo } from "react";

import { cn } from "@/lib/utils";

import { TextProps, textVariants } from "./Text.type";

const Text = memo(
  ({
    children,
    className,
    variant,
    color,
    cursor,
    asChild = false,
    tag = "p",
  }: TextProps) => {
    const Comp = asChild ? Slot : tag;
    return (
      <Comp className={cn(textVariants({ variant, color, cursor, className }))}>
        {children}
      </Comp>
    );
  },
);

export default Text;
