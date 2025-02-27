export type ButtonGroupProps = {
  group: {
    label?: string;
    isActive?: boolean;
    value: number | string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    icon?: any;
  }[];
  className?: string;
};
