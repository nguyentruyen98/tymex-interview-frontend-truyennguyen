import { SliderSingleProps } from "antd";
import { SliderRangeProps } from "antd/es/slider";
import { SliderRef } from "rc-slider";

export type SliderProps = React.ForwardRefExoticComponent<
  (SliderSingleProps | SliderRangeProps) & React.RefAttributes<SliderRef>
> & {
  className?: string;
  title?: string;
  maxTitle?: string;
  minTitle?: string;
};
