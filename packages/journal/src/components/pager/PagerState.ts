import { useState } from "react";
import {
  emptyPagedResult,
  PagedResult,
} from "../../features/database/Database";

export const usePagerState = <T>(initialItems = emptyPagedResult()) => {
  const [page, setPage] = useState(0);
  const [items, setItems] = useState<PagedResult<T>>(initialItems);

  const hasNext = Boolean(
    items && items.page + 1 < items.count / items.pageSize
  );
  const hasPrevious = page > 0;
  const handlePrevious = () => setPage((page) => page - 1);
  const handleNext = () => setPage((page) => page + 1);

  return {
    items,
    setItems,
    page,
    setPage,
    hasNext,
    hasPrevious,
    handleNext,
    handlePrevious,
  };
};
