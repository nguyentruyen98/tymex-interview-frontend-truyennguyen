import { memo, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";

import Button from "@/components/Button/Button";
import ButtonGroup from "@/components/ButtonGroup/ButtonGroup";
import CardItem from "@/components/CardItem/CardItem";
import { BUTTON_GROUP_OPTIONS } from "@/constants";
import useIsFirstRender from "@/hooks/isFirstRender";
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
    const { ref, inView } = useInView();
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      if (inView && !isFetchingNextPage) {
        scrollRef.current?.scrollIntoView({ behavior: "smooth" });
      }
    }, [inView, isFetchingNextPage]);

    console.log("data", data.pages);
    return (
      <div className="lg:col-span-2 xl:col-span-3">
        <ButtonGroup
          className="mb-10"
          group={BUTTON_GROUP_OPTIONS}
          onGroupClick={value => {
            onChangeFilter(value, "category");
          }}
        />
        {/* {pages.length === 0 && <ProductListNoResults />} */}
        <div className="flex max-h-[2625px] flex-wrap justify-center gap-10 overflow-x-hidden overflow-y-auto lg:justify-between">
          {(isLoading || isFetching) && <ProductListSkeleton />}
          {data.pages
            .flatMap(page => page)
            .map(item => {
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
          <div ref={scrollRef} />
          {isFetchingNextPage && <ProductListSkeleton />}
        </div>
        <div className="mt-14 flex justify-center">
          <Button ref={ref} size="large" onClick={() => fetchNextPage()}>
            {isFetchingNextPage ? "Loading" : "View more"}
          </Button>
          <Button
            ref={ref}
            size="large"
            onClick={() =>
              scrollRef.current?.scrollIntoView({ behavior: "smooth" })
            }
          >
            View more
          </Button>
        </div>
      </div>
    );
  },
);

export default ProductList;
