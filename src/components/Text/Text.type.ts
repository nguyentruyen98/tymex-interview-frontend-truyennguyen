import { cva, VariantProps } from "class-variance-authority";
import { PropsWithChildren } from "react";

export const textVariants = cva("relative", {
  variants: {
    variant: {
      header: "text-sm leading-6 font-semibold sm:text-base",
      "header-medium": "text-base leading-6 font-medium",
      caption: "text-xs leading-5 font-medium",
      body: "text-sm leading-5 font-medium",
      "title-lg": "font-drone text-base leading-7 font-bold lg:text-lg",
      "title-sm": "font-drone text-sm leading-5 font-bold",
      "title-7xl": "font-drone text-7xl leading-[88px font-bold",
    },
    color: {
      primary: "text-white",
      secondary: "text-secondary",
      "shadow-gray": "text-shadow-gray",
      "light-gray": "text-light-gray",
      gradient:
        "bg-linear-to-r from-[#DA458F] to-[#DA34DD] bg-clip-text text-transparent after:absolute after:bottom-0 after:left-1 after:block after:h-0.5 after:w-4 after:bg-linear-to-r after:from-[#DA458F] after:to-[#DA34DD] after:content-['']",
    },
    cursor: {
      pointer: "cursor-pointer",
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
