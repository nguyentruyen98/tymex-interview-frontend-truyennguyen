import { SliderRangeProps } from "antd/es/slider";

export type SliderProps = SliderRangeProps & {
  className?: string;
  title?: string;
  maxTitle?: string;
  minTitle?: string;
};
