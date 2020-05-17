import React from "react";
import { Icon, FlexProps, Row } from "@mpkelly/siam";

export interface PagerProps extends FlexProps {
  hasNext: boolean;
  hasPrevious: boolean;
  onNext(): void;
  onPrevious(): void;
}

export const Pager = (props: PagerProps) => {
  const { hasNext, hasPrevious, onNext, onPrevious, ...rest } = props;
  return (
    <Row {...rest}>
      <Icon
        kind="button"
        disabledKind="plain"
        disabledColor="secondary.text"
        disabled={!hasPrevious}
        name="previous"
        onClick={() => hasPrevious && onPrevious()}
        mr="sm"
        width={36}
      />
      <Icon
        kind="button"
        disabledKind="plain"
        disabledColor="secondary.text"
        disabled={!hasNext}
        name="next"
        onClick={() => hasNext && onNext()}
        ml="sm"
        width={36}
      />
    </Row>
  );
};
