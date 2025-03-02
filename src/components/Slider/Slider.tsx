import "./Slider.style.css";

import { Slider as AntdSlider } from "antd";

import Text from "@/components/Text/Text";
import { cn } from "@/lib/utils";

import { SliderProps } from "./Slider.type";

const Slider = ({
  title = "",
  maxTitle = "",
  minTitle = "",
  className,
  onChange,
  ...props
}: SliderProps) => {
  return (
    <div className={cn("flex flex-col gap-5", className)}>
      {title && (
        <Text tag="label" variant="header">
          {title}
        </Text>
      )}
      <AntdSlider
        className="!m-0 !p-0"
        tooltip={{
          formatter: value => `${value} ETH`,
        }}
        classNames={{
          root: "root",
          handle: "handle",
          track: "track",
        }}
        onChange={onChange}
        {...props}
      />
      {maxTitle && minTitle && (
        <div className="flex justify-between">
          <Text variant="header-medium" color="light-gray">
            {minTitle}
          </Text>
          <Text variant="header-medium" color="light-gray">
            {maxTitle}
          </Text>
        </div>
      )}
    </div>
  );
};

export default Slider;
