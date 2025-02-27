import CloseIcon from "@/assets/icons/close.svg";
import SearchIcon from "@/assets/icons/search.svg";
import Button from "@/components/Button/Button";
import Select from "@/components/Select/Select";
import Slider from "@/components/Slider/Slider";
import Text from "@/components/Text/Text";
import { Input } from "@/components/ui/input";
import {
  FILTER_PRICE_OPTIONS,
  FILTER_THEME_OPTIONS,
  FILTER_TIER_OPTIONS,
  FILTER_TIME_OPTIONS,
} from "@/constants";
import { FilterValue } from "@/types";

type FilterProps = {
  filter: FilterValue;
  onChangeTheme: (value: FilterValue["theme"]) => void;
  onChangeTier: (value: FilterValue["tier"]) => void;
  onResetFilter: () => void;
  onChangeSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Filter = ({
  filter,
  onChangeTheme,
  onChangeTier,
  onResetFilter,
  onChangeSearch,
}: FilterProps) => {
  const { tier, theme } = filter;
  return (
    <div>
      <Input
        placeholder="Quick search"
        icon={SearchIcon}
        onChange={onChangeSearch}
      />
      <div className="mt-10 space-y-10">
        <Slider title="PRICE" minTitle="0.01 ETH" maxTitle="200 ETH" />
        <Select
          label="TIER"
          defaultValue={tier}
          value={tier}
          options={FILTER_TIER_OPTIONS}
          onValueChange={onChangeTier}
        />
        <Select
          label="THEME"
          defaultValue={theme}
          value={theme}
          options={FILTER_THEME_OPTIONS}
          onValueChange={onChangeTheme}
        />
        <Select label="TIME" defaultValue="All" options={FILTER_TIME_OPTIONS} />
        <Select
          label="PRICE"
          defaultValue="All"
          options={FILTER_PRICE_OPTIONS}
        />
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2" onClick={onResetFilter}>
            <CloseIcon />
            <Text variant="header">Reset filter</Text>
          </div>
          <Button className="px-10">Search</Button>
        </div>
      </div>
    </div>
  );
};

export default Filter;
