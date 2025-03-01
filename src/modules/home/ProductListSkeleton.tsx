import CardItemSkeleton from "@/components/CardItemSkeleton/CardItemSkeleton";

const ProductListSkeleton = () => {
  return (
    <div className="flex flex-wrap justify-center gap-4 py-2 lg:justify-between">
      {new Array(20).fill(0).map((_, index) => (
        <CardItemSkeleton key={index} />
      ))}
    </div>
  );
};

export default ProductListSkeleton;
