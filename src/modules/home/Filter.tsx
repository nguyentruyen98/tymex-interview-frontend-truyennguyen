import { memo } from "react";

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
  onResetFilter: () => void;
  onChangeFilter: (value: string | number[], name: keyof FilterValue) => void;
  onChangeSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFilter: () => void;
};

const Filter = memo(
  ({
    filter,
    onResetFilter,
    onChangeSearch,
    onChangeFilter,
    onFilter,
  }: FilterProps) => {
    const { tier, theme, price, time, priceRange } = filter;
    return (
      <div>
        <Input
          placeholder="Quick search"
          icon={SearchIcon}
          onChange={onChangeSearch}
        />
        <div className="mt-10 space-y-10">
          <Slider
            onChange={(value: number[]) => onChangeFilter(value, "priceRange")}
            range
            title="PRICE"
            minTitle="0.01 ETH"
            maxTitle="200 ETH"
            max={200}
            min={0.01}
            step={0.01}
            defaultValue={[0, 200]}
            value={priceRange}
          />
          <Select
            label="TIER"
            defaultValue="All"
            value={tier}
            options={FILTER_TIER_OPTIONS}
            onValueChange={value => onChangeFilter(value, "tier")}
          />
          <Select
            label="THEME"
            defaultValue="All"
            value={theme}
            options={FILTER_THEME_OPTIONS}
            onValueChange={value => onChangeFilter(value, "theme")}
          />
          <Select
            label="TIME"
            defaultValue="All"
            value={time}
            options={FILTER_TIME_OPTIONS}
            onValueChange={value => onChangeFilter(value, "time")}
          />
          <Select
            label="PRICE"
            defaultValue="All"
            value={price}
            options={FILTER_PRICE_OPTIONS}
            onValueChange={value => onChangeFilter(value, "price")}
          />
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2" onClick={onResetFilter}>
              <CloseIcon />
              <Text cursor="pointer" variant="header">
                Reset filter
              </Text>
            </div>
            <Button onClick={onFilter} className="px-10">
              Search
            </Button>
          </div>
        </div>
      </div>
    );
  },
);

export default Filter;
