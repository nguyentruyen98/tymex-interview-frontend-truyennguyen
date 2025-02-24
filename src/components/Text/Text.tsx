import { Slot } from "@radix-ui/react-slot";
import { memo } from "react";

import { cn } from "@/lib/utils";

import { TextProps, textVariants } from "./Text.type";

const Text = memo(
  ({ children, className, variant, asChild = false, tag = "p" }: TextProps) => {
    const Comp = asChild ? Slot : tag;
    return (
      <Comp className={cn(textVariants({ variant, className }))}>
        {children}
      </Comp>
    );
  },
);

export default Text;
