/// <reference types="react" />
import { PagedResult } from "../../features/database/Database";
export declare const usePagerState: <T>(initialItems?: {
    count: number;
    pageSize: number;
    page: number;
    items: any[];
}) => {
    items: PagedResult<T>;
    setItems: import("react").Dispatch<import("react").SetStateAction<PagedResult<T>>>;
    page: number;
    setPage: import("react").Dispatch<import("react").SetStateAction<number>>;
    hasNext: boolean;
    hasPrevious: boolean;
    handleNext: () => void;
    handlePrevious: () => void;
};
