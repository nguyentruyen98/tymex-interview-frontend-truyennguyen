import { SearchX } from "lucide-react";

import Text from "@/components/Text/Text";
import { withFadeIn } from "@/hocs/withFadeIn";
const ProductListNoResults = () => {
  return (
    <div className="flex flex-col items-center p-4">
      <SearchX className="h-40 w-40 text-white sm:h-52 sm:w-52" />
      <Text variant="title-7xl" color="gradient">
        No Results Found
      </Text>
      <Text variant="header">We couldn't find what your searched.</Text>
      <Text variant="header">Try searching again.</Text>
    </div>
  );
};

const ProductListNoResultsWithAnimation = withFadeIn(ProductListNoResults);

export default ProductListNoResultsWithAnimation;
