import React from "react";
import { FlexProps, Column } from "@mpkelly/siam";

export interface OverlayViewProps extends FlexProps {}

export const OverlayView = (props: OverlayViewProps) => {
  const { ...rest } = props;
  return (
    <Column
      position="fixed"
      top={0}
      left={0}
      right={0}
      bottom={0}
      zIndex="dialogs"
      {...rest}
    ></Column>
  );
};
