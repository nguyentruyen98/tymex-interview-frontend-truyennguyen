import CardItemSkeleton from "@/components/CardItemSkeleton/CardItemSkeleton";

const ProductListSkeleton = () => {
  return (
    <div className="flex max-h-[2101px] flex-wrap justify-center gap-10 overflow-x-hidden pb-14 lg:justify-between">
      {new Array(20).fill(0).map((_, index) => (
        <CardItemSkeleton key={index} />
      ))}
    </div>
  );
};

export default ProductListSkeleton;
