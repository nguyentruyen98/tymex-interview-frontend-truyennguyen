import { useInfiniteQuery } from "@tanstack/react-query";
import { useEffect } from "react";

import { getProductList } from "@/apis/getProductList";
import { FilterValue } from "@/types";

const FETCH_INTERVAL = 60 * 1000;

export const useGetProductList = (filter: FilterValue, searchValue: string) => {
  const query = useInfiniteQuery({
    queryKey: [
      "productList",
      searchValue,
      filter.category,
      filter.price,
      filter.theme,
      filter.tier,
      filter.time,
      filter.page,
      filter.priceRange,
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
    throwOnError: true,
  });

  const { refetch } = query;
  useEffect(() => {
    const interval = setInterval(() => {
      refetch();
    }, FETCH_INTERVAL);

    return () => clearInterval(interval);
  }, [refetch]);

  return query;
};
