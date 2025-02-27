import { cn } from "@/lib/utils";

import Button from "../Button/Button";
import { ButtonGroupProps } from "./ButtonGroup.type";

const ButtonGroup = ({ group, className }: ButtonGroupProps) => {
  return (
    <div
      className={cn(
        "flex flex-row flex-wrap items-center justify-between gap-2",
        className,
      )}
    >
      {group.map(({ value, label = "", isActive = false, icon }) => {
        return (
          <Button
            key={value}
            shadow="none"
            variant={isActive ? "primary" : "secondary"}
          >
            {label}
            {icon}
          </Button>
        );
      })}
    </div>
  );
};

export default ButtonGroup;
