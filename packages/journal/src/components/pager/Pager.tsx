import React from "react";
import { Icon, FlexProps, Row, Show, Text } from "@mpkelly/siam";

export interface PagerProps extends FlexProps {
  hasNext: boolean;
  hasPrevious: boolean;
  onNext(): void;
  onPrevious(): void;
  page: number;
  totalPages: number;
}

export const Pager = (props: PagerProps) => {
  const {
    hasNext,
    hasPrevious,
    onNext,
    onPrevious,
    page,
    totalPages,
    ...rest
  } = props;
  return (
    <Row gravity="center-start" {...rest}>
      <Icon
        kind="button"
        disabledKind="plain"
        disabledColor="secondary.text"
        disabled={!hasPrevious}
        name="previous"
        onClick={() => hasPrevious && onPrevious()}
        mr="sm"
        size={36}
      />
      <Show when={totalPages}>
        <Text kind="small" color="secondary.text" mx="xs">
          {page}/{totalPages}
        </Text>
      </Show>
      <Icon
        kind="button"
        disabledKind="plain"
        disabledColor="secondary.text"
        disabled={!hasNext}
        name="next"
        onClick={() => hasNext && onNext()}
        ml="sm"
        size={36}
      />
    </Row>
  );
};
