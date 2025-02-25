import {
  Select as ShadcnSelect,
  SelectContent as ShadcnSelectContent,
  SelectGroup as ShadcnSelectGroup,
  SelectItem as ShadcnSelectItem,
  SelectTrigger as ShadcnSelectTrigger,
  SelectValue as ShadcnSelectValue,
} from "@/components/ui/select";

import Text from "../Text/Text";
import { SelectProps } from "./Select.type";

const Select = ({
  placeholder = "",
  label = "",
  options = [],
  onValueChange,
  defaultValue,
}: SelectProps) => {
  return (
    <div className="flex flex-col gap-3">
      {label && (
        <Text variant="header" color="shadow-gray">
          {label}
        </Text>
      )}
      <ShadcnSelect onValueChange={onValueChange} defaultValue={defaultValue}>
        <ShadcnSelectTrigger>
          <ShadcnSelectValue placeholder={placeholder} />
        </ShadcnSelectTrigger>
        <ShadcnSelectContent>
          <ShadcnSelectGroup>
            {options.map(({ value, label }) => (
              <ShadcnSelectItem key={value} value={value}>
                {label}
              </ShadcnSelectItem>
            ))}
          </ShadcnSelectGroup>
        </ShadcnSelectContent>
      </ShadcnSelect>
    </div>
  );
};
export default Select;
