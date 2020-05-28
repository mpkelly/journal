import React from "react";
import { Label as TextLabel, Icon, TextProps } from "@mpkelly/siam";

export interface LabelProps extends TextProps {
  onDelete(): void;
}

export const Label = (props: LabelProps) => {
  const { onDelete, children, ...rest } = props;
  return (
    <TextLabel gravity="center-start" {...rest}>
      {children}
      <Icon
        kind="xsmall.button"
        name="clear"
        onClick={onDelete}
        size={12}
        ml={4}
        mt={1}
      />
    </TextLabel>
  );
};
