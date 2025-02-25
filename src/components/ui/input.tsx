import * as React from "react";

import SearchIcon from "@/assets/icons/search.svg";
import { cn } from "@/lib/utils";

type InputProps = React.ComponentProps<"input"> & { icon?: string };

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, icon, ...props }, ref) => {
    return (
      <div className="relative w-full">
        {icon && (
          <div className="absolute top-1/2 left-4 -translate-y-1/2">
            <SearchIcon />
          </div>
        )}
        <input
          type={type}
          className={cn(
            "border-shadow-gray placeholder:text-shadow-gray w-full rounded-sm border py-2.5 pr-4 pl-12 text-base text-white",
            className,
          )}
          ref={ref}
          {...props}
        />
      </div>
    );
  },
);
Input.displayName = "Input";

export { Input };
