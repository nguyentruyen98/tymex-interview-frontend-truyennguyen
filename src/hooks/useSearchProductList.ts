import { useCallback, useState } from "react";

import useDebounce from "./useDebounce";

export const useSearchProductList = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  const deferredSearchValue = useDebounce(searchValue);

  const handleChangeSearch = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => setSearchValue(e.target.value),
    [setSearchValue],
  );

  return { handleChangeSearch, deferredSearchValue };
};
