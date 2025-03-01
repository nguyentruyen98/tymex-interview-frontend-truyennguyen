import { useCallback, useState } from "react";

export const usePagination = (
  _currentPage: number = 0,
  itemPerPage: number = 0,
) => {
  const [currentPage, setCurrentPage] = useState(_currentPage);
  const handleNextPage = useCallback(
    () => setCurrentPage(prevPage => prevPage + 1),
    [],
  );

  const handlePrevPage = useCallback(
    () => setCurrentPage(prevPage => (prevPage ? prevPage - 1 : 0)),
    [],
  );

  const handleResetPage = useCallback(() => setCurrentPage(0), []);

  return {
    itemPerPage,
    handleNextPage,
    handlePrevPage,
    currentPage,
    handleResetPage,
  };
};
