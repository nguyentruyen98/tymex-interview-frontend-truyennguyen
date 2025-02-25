import Text from "@/components/Text/Text";
import { cn } from "@/lib/utils";

import { ButtonProps, buttonVariants } from "./Button.type";

const Button = ({ children, className, variant }: ButtonProps) => {
  return (
    <button className={cn(buttonVariants({ variant, className }))}>
      <Text variant="header">{children}</Text>
    </button>
  );
};

export default Button;
