import { cva, VariantProps } from "class-variance-authority";
import { PropsWithChildren } from "react";

export const textVariants = cva("relative", {
  variants: {
    variant: {
      header: "text-sm leading-6 font-semibold lg:text-base",
      "header-medium": "text-base leading-6 font-medium",
      caption: "text-xs leading-5 font-medium",
      body: "text-sm leading-5 font-medium",
      "title-lg": "font-drone text-base leading-7 font-bold lg:text-lg",
      "title-xl": "font-drone text-xl leading-8 font-bold",
      "title-sm": "font-drone text-sm leading-5 font-bold",
      "title-7xl":
        "font-drone text-xl sm:text-3xl lg:text-4xl xl:text-7xl leading-[88px] font-bold",
    },
    color: {
      primary: "text-white",
      secondary: "text-secondary",
      "shadow-gray": "text-shadow-gray",
      "light-gray": "text-light-gray",
      gradient:
        "!bg-linear-to-r !from-cyber-magenta !to-neon-purple !bg-clip-text !text-transparent",
    },
    style: {
      none: "",
      underline:
        " after:absolute after:bottom-0 after:left-1 after:block after:h-0.5 after:w-4 after:bg-linear-to-r after:from-cyber-magenta after:to-neon-purple after:content-['']",
    },
    cursor: {
      pointer: "cursor-pointer",
      style: "none",
      none: "",
    },
  },
  defaultVariants: {
    variant: "body",
    color: "primary",
    cursor: "none",
  },
});

export type TextProps = PropsWithChildren<VariantProps<typeof textVariants>> & {
  className?: string;
  asChild?: boolean;
  tag?: string;
};
