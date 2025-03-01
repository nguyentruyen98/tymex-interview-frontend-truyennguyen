import { useCallback, useState } from "react";

import { FilterValue } from "@/types";

const DEFAULT_FILTER: FilterValue = {
  tier: "All",
  theme: "All",
  time: "All",
  price: "All",
  category: [],
  page: 0,
  priceRange: [0, 200],
};

export const useFilterProductList = () => {
  const [filterOnSearch, setFilterOnSearch] =
    useState<FilterValue>(DEFAULT_FILTER);
  const [filter, setFilter] = useState<FilterValue>(DEFAULT_FILTER);

  const handleChangeFilter = useCallback(
    (value: string, name: keyof FilterValue) => {
      if (name === "category") {
        return setFilterOnSearch(prevState => {
          const { category } = prevState;

          if (category.includes(value)) {
            return {
              ...prevState,
              category: category.filter(item => item !== value),
            };
          } else {
            return {
              ...prevState,
              category: [...category, value],
            };
          }
        });
      }

      if (name === "price" && ["asc", "desc"].includes(filter.time)) {
        return setFilter(prevState => ({
          ...prevState,
          price: value as FilterValue["price"],
          time: "All",
        }));
      }
      if (name === "time" && ["asc", "desc"].includes(filter.price)) {
        return setFilter(prevState => ({
          ...prevState,
          time: value as FilterValue["time"],
          price: "All",
        }));
      }
      return setFilter(prevState => ({ ...prevState, [name]: value }));
    },
    [filter.price, filter.time],
  );

  const handleFilter = useCallback(
    () =>
      setFilterOnSearch({
        ...filter,
        page: 0,
        category: filterOnSearch.category,
      }),
    [filter, filterOnSearch.category],
  );

  const handleResetFilter = useCallback(() => {
    const filterReset = {
      ...DEFAULT_FILTER,
      category: filterOnSearch.category,
    };
    setFilter(filterReset);
    setFilterOnSearch(filterReset);
  }, [filterOnSearch.category]);

  return {
    filter,
    filterOnSearch,
    handleChangeFilter,
    handleResetFilter,
    handleFilter,
  };
};
