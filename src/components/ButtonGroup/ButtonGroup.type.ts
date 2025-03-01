export type ButtonGroupProps = {
  group: {
    label?: string;
    isActive?: boolean;
    value: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    icon?: any;
  }[];
  className?: string;
  onGroupClick?: (value: string) => void;
};
