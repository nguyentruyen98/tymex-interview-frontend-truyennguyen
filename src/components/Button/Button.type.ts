import { cva, VariantProps } from "class-variance-authority";
import { PropsWithChildren } from "react";

export const buttonVariants = cva(
  "cursor-pointer rounded-sm disabled:bg-shadow-gray disabled:bg-none disabled:cursor-not-allowed",
  {
    variants: {
      variant: {
        primary: "bg-linear-to-r from-cyber-magenta to-neon-purple",
        secondary: "bg-gradient-to-r from-cyber-magenta/40 to-neon-purple/40",
      },
      shadow: {
        default: "shadow-[0px_0px_50px_0_#BB4BFF52]",
        none: "",
      },
      size: {
        default: "px-3 lg:px-5 py-3",
        large: "lg:px-[122px] lg:py-[23px] px-16 py-4",
      },
    },
    defaultVariants: {
      variant: "primary",
      shadow: "default",
      size: "default",
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
