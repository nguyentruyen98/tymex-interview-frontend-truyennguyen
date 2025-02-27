import { cva, VariantProps } from "class-variance-authority";
import { PropsWithChildren } from "react";

export const buttonVariants = cva(
  "cursor-pointer rounded-sm px-3 py-1 lg:px-5 lg:py-2",
  {
    variants: {
      variant: {
        primary: "bg-linear-to-r from-[#DA458F] to-[#DA34DD]",
        secondary: "bg-gradient-to-r from-[#DA458F]/40 to-[#DA34DD]/40",
      },
      shadow: {
        default: "shadow-[0px_0px_50px_0_#BB4BFF52]",
        none: "",
      },
    },
    defaultVariants: {
      variant: "primary",
      shadow: "default",
    },
  },
);

export type ButtonProps = PropsWithChildren<
  VariantProps<typeof buttonVariants>
> &
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >;
