import React from "react";
import { Flex, FlexProps } from "udx-react";

export interface DividerProps extends FlexProps {
  height?: number;
}
export const Divider = (props: DividerProps) => {
  return <Flex {...props} borderLeft={"1px solid muted"} />;
};
