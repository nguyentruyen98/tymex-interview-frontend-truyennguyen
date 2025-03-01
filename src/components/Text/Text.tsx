import { Slot } from "@radix-ui/react-slot";
import { memo } from "react";

import { WithAnimationProps } from "@/hocs/type";
import { withTextAnimation } from "@/hocs/withTextAnimation";
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
    style,
  }: WithAnimationProps<TextProps>) => {
    const Comp = asChild ? Slot : tag;
    return (
      <Comp
        className={cn(
          textVariants({ variant, color, cursor, style, className }),
        )}
      >
        {children}
      </Comp>
    );
  },
);

const TextWithAnimation = withTextAnimation(Text);

export default TextWithAnimation;
