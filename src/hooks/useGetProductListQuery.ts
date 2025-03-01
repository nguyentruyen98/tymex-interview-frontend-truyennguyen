import { useInfiniteQuery } from "@tanstack/react-query";
import { useState } from "react";

import { getProductList } from "@/apis/getProductList";
import { FilterValue } from "@/types";

export const useGetProductList = (filter: FilterValue, searchValue: string) => {
  return useInfiniteQuery({
    queryKey: [
      "productList",
      searchValue,
      filter.category,
      filter.price,
      filter.theme,
      filter.tier,
      filter.time,
      filter.page,
    ],
    queryFn: ({ pageParam }) => {
      return getProductList(filter, searchValue, pageParam);
    },

    initialPageParam: 1,
    initialData: { pages: [], pageParams: [] },
    getNextPageParam: (lastPage, _allPages, lastPageParam) => {
      if (lastPage.length === 0) {
        return undefined;
      }
      return lastPageParam + 1;
    },
  });
};
