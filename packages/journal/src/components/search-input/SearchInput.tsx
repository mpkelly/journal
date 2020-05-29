import React from "react";
import { Input, Icon, FlexProps, Show, Text, Row } from "@mpkelly/siam";
import { useSearchInput } from "./SearchInputState";

export interface SearchInputProps extends FlexProps {
  onSearch(text: string): void;
  resultCount: number | string;
}

export const SearchInput = (props: SearchInputProps) => {
  const {
    resultCount,
    handleKey,
    value,
    showCount,
    showClear,
    handleClear,
    rest,
  } = useSearchInput(props);
  return (
    <Input
      leftContent={
        <Icon name="search" fontSize="inherit" color="secondary.text" />
      }
      rightContent={
        <Row gravity="center-start">
          <Show when={showCount}>
            <Text
              kind="small"
              color="secondary.text"
              labelKey={["searchResults", resultCount]}
            />
          </Show>
          <Show when={showClear}>
            <Icon
              name="clear"
              kind="small.button"
              color="secondary.text"
              ml="md"
              onClick={handleClear}
            />
          </Show>
        </Row>
      }
      kind="search"
      {...rest}
      {...value.valueBind}
      flexGrow={value.value ? 1 : 0}
      onKeyDown={handleKey}
    />
  );
};
