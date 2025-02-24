import { cva, VariantProps } from "class-variance-authority";
import { PropsWithChildren } from "react";

export const textVariants = cva("", {
  variants: {
    variant: {
      header: "text-base leading-6 font-semibold text-white",
      caption: "text-xs leading-5 font-medium text-white",
      body: "text-sm leading-5 font-medium text-white",
      "title-lg": "font-drone text-lg leading-7 font-bold text-white",
      "title-sm": "font-drone text-sm leading-5 font-bold text-white",
    },
  },
  defaultVariants: {
    variant: "body",
  },
});

export type TextProps = PropsWithChildren<VariantProps<typeof textVariants>> & {
  className?: string;
  asChild?: boolean;
  tag?: string;
};
