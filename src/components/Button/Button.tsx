import Text from "@/components/Text/Text";
import { cn } from "@/lib/utils";

import { ButtonProps, buttonVariants } from "./Button.type";

const Button = ({ children, className, variant, onClick }: ButtonProps) => {
  return (
    <button
      className={cn(buttonVariants({ variant, className }))}
      onClick={onClick}
    >
      <Text variant="header">{children}</Text>
    </button>
  );
};

export default Button;
