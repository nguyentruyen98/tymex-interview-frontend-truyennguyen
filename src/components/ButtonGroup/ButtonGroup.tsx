import { memo, useCallback, useState } from "react";

import { cn } from "@/lib/utils";

import Button from "../Button/Button";
import { ButtonGroupProps } from "./ButtonGroup.type";

const ButtonGroup = memo(
  ({ group, className, onGroupClick }: ButtonGroupProps) => {
    const [activeGroup, setActiveGroup] = useState(
      group.map((_, index) => index === 0),
    );
    const handleClickButton = useCallback(
      (index: number, value: string) => {
        const newActiveGroup = activeGroup.map((isActive, i) =>
          i === index ? !isActive : isActive,
        );
        setActiveGroup(newActiveGroup);
        onGroupClick?.(value);
      },
      [activeGroup, onGroupClick],
    );

    return (
      <div
        className={cn(
          "flex flex-row flex-wrap items-center justify-between gap-2",
          className,
        )}
      >
        {group.map(({ value, label = "", icon }, index) => {
          return (
            <Button
              key={value}
              shadow="none"
              variant={activeGroup[index] ? "primary" : "secondary"}
              onClick={() => handleClickButton(index, value)}
            >
              {label}
              {icon}
            </Button>
          );
        })}
      </div>
    );
  },
  () => true,
);

export default ButtonGroup;
