import { useState } from "react";
import {
  emptyPagedResult,
  PagedResult,
} from "../../features/database/Database";

export const usePagerState = <T>(
  initialItems: PagedResult<T> = emptyPagedResult()
) => {
  const [page, setPage] = useState(0);
  const [items, setItems] = useState<PagedResult<T>>(initialItems);

  const hasNext = Boolean(items && page + 1 < items.count / items.pageSize);
  const hasPrevious = page > 0;
  const handlePrevious = () => setPage((page) => page - 1);
  const handleNext = () => setPage((page) => page + 1);
  const totalPages = items.count ? Math.ceil(items.count / items.pageSize) : 0;

  return {
    items,
    setItems,
    page,
    setPage,
    hasNext,
    hasPrevious,
    handleNext,
    handlePrevious,
    totalPages,
  };
};
