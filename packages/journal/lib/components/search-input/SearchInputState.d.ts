import React from "react";
import { SearchInputProps } from "./SearchInput";
export declare const useSearchInput: (props: SearchInputProps) => {
    resultCount: string | number;
    onSearch: (text: string) => void;
    handleKey: (event: React.KeyboardEvent) => void;
    value: import("react-hanger/useInput").UseInput;
    showCount: string | number;
    showClear: boolean;
    handleClear: () => void;
    rest: {
        [x: string]: any;
    };
};
