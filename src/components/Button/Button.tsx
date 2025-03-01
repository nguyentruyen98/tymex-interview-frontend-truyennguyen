import Text from "@/components/Text/Text";
import { withHover } from "@/hocs/withHover";
import { cn } from "@/lib/utils";

import { ButtonProps, buttonVariants } from "./Button.type";

const Button = ({
  children,
  className,
  variant,
  size,
  onClick,
}: ButtonProps) => {
  return (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      onClick={onClick}
    >
      <Text variant="header">{children}</Text>
    </button>
  );
};
const ButtonWithHover = withHover(Button);
export default ButtonWithHover;
