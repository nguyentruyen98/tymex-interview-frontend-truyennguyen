import { Skeleton } from "@/components/ui/skeleton";

const CardItemSkeleton = () => {
  return (
    <div className="bg-shadow-violet/60 flex h-[377px] w-[267px] flex-col items-center rounded-[10px] p-4">
      <Skeleton className="mt-4 h-[233px] w-[235px]" />
      <Skeleton className="mt-6 h-6 w-full" />
      <div className="mt-4 flex w-full items-center justify-start gap-3">
        <Skeleton className="h-8 w-8 rounded-full" />
        <Skeleton className="h-4 w-[120px]" />
      </div>
    </div>
  );
};

export default CardItemSkeleton;
