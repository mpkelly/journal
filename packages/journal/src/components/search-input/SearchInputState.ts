import React from "react";

import useInput from "react-hanger/useInput";
import { isHotkey } from "@mpkelly/react-editor-kit";
import { SearchInputProps } from "./SearchInput";

export const useSearchInput = (props: SearchInputProps) => {
  const { resultCount, onSearch, ...rest } = props;
  const value = useInput();
  const showCount = value.value && resultCount;
  const showClear = Boolean(value.value);

  const handleKey = (event: React.KeyboardEvent) => {
    if (isHotkey("enter", event.nativeEvent)) {
      const text = value.value.trim();
      if (text) {
        onSearch(text);
      }
    }
  };

  const handleClear = () => {
    value.clear();
    onSearch("");
  };

  return {
    resultCount,
    onSearch,
    handleKey,
    value,
    showCount,
    showClear,
    handleClear,
    rest,
  };
};
