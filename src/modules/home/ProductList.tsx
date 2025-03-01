import { forwardRef, memo, useEffect, useMemo, useRef } from "react";
import { useInView } from "react-intersection-observer";

import { IProduct } from "@/apis/type";
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
};

type ProductsProps = {
  isLoading?: boolean;
  isFetching?: boolean;
  isFetchingNextPage?: boolean;
  products?: IProduct[];
};

const ProductList = memo(
  ({ filter, searchValue, onChangeFilter }: ProductListProps) => {
    const {
      data,
      isLoading,
      isFetching,
      fetchNextPage,
      isFetchingNextPage,
      hasNextPage,
    } = useGetProductList(filter, searchValue);
    const { ref, inView } = useInView();

    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      if (!inView && !isFetchingNextPage) {
        scrollRef.current?.scrollIntoView({
          behavior: "smooth",
          // inline: "start",
          block: "nearest",
        });
      }
    }, [inView, isFetchingNextPage]);

    const productList = useMemo(
      () => data.pages.flatMap(page => page),
      [data.pages],
    );

    const isNotFound = !isLoading && !isFetching && productList.length === 0;

    return (
      <div className="lg:col-span-2 xl:col-span-3">
        <ButtonGroup
          className="mb-10"
          group={BUTTON_GROUP_OPTIONS}
          onGroupClick={value => {
            onChangeFilter(value, "category");
          }}
        />
        <Products
          ref={scrollRef}
          isFetching={isFetching}
          isLoading={isLoading}
          isFetchingNextPage={isFetchingNextPage}
          products={productList}
        />
        <div className="mt-14 flex justify-center">
          {!isNotFound && (
            <Button
              ref={ref}
              size="large"
              onClick={() => fetchNextPage()}
              disabled={isFetchingNextPage || !hasNextPage}
            >
              View more
            </Button>
          )}
        </div>
      </div>
    );
  },
);

const Products = memo(
  forwardRef<HTMLDivElement, ProductsProps>(
    (
      {
        isFetching = false,
        isLoading = false,
        isFetchingNextPage = false,
        products = [],
      },
      ref,
    ) => {
      const isNotFound = !isLoading && !isFetching && products.length === 0;

      if (isNotFound) return <ProductListNoResults />;

      if (isLoading || isFetching || isFetchingNextPage)
        return <ProductListSkeleton />;
      return (
        <div className="flex max-h-[2625px] flex-wrap justify-center gap-10 overflow-x-hidden overflow-y-auto py-2 lg:justify-between">
          {(isLoading || isFetching) && <ProductListSkeleton />}
          {products.map(item => {
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
          <div className="basis-full" ref={ref} />
        </div>
      );
    },
  ),
);

export default ProductList;
