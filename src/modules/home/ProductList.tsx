import { memo, useMemo } from "react";

import Button from "@/components/Button/Button";
import ButtonGroup from "@/components/ButtonGroup/ButtonGroup";
import CardItem from "@/components/CardItem/CardItem";
import { BUTTON_GROUP_OPTIONS } from "@/constants";
import { useGetProductList } from "@/hooks/useGetProductListQuery";
import { FilterValue } from "@/types";

import ProductListNoResults from "./ProductListNoResults";
import ProductListSkeleton from "./ProductListSkeleton";

type ProductListProps = {
  filter: FilterValue;
  searchValue: string;
  onChangeFilter: (value: string, name: keyof FilterValue) => void;
  conNextPage: () => void;
};
const ProductList = memo(
  ({ filter, searchValue, onChangeFilter }: ProductListProps) => {
    const { data, isLoading, isFetching, fetchNextPage, isFetchingNextPage } =
      useGetProductList(filter, searchValue);

    const productList = useMemo(
      () => data.pages.flatMap(page => page),
      [data.pages],
    );

    return (
      <div className="lg:col-span-2 xl:col-span-3">
        <ButtonGroup
          className="mb-10"
          group={BUTTON_GROUP_OPTIONS}
          onGroupClick={value => {
            onChangeFilter(value, "category");
          }}
        />
        {productList.length === 0 && !isFetching && <ProductListNoResults />}
        <div className="flex max-h-[2625px] flex-wrap justify-center gap-10 overflow-x-hidden overflow-y-auto lg:justify-between">
          {(isLoading || isFetching) && <ProductListSkeleton />}
          {productList.map(item => {
            const {
              id,
              category,
              price,
              author,
              title,
              isFavorite,
              theme,
              imageId,
            } = item;
            return (
              <CardItem
                key={id}
                isFavorite={isFavorite}
                category={category}
                author={author}
                title={title}
                price={price}
                theme={theme}
                imageId={imageId}
              />
            );
          })}
          {isFetchingNextPage && <ProductListSkeleton />}
        </div>
        <div className="mt-14 flex justify-center">
          <Button size="large" onClick={() => fetchNextPage()}>
            {isFetchingNextPage ? "Loading" : "View more"}
          </Button>
        </div>
      </div>
    );
  },
);

export default ProductList;
