import React from "react";
import { Row, FlexProps } from "@mpkelly/siam";

export interface DividerProps extends FlexProps {
  height?: number;
}
export const Divider = (props: DividerProps) => {
  return <Row {...props} borderLeft={"1px solid muted"} />;
};
