import React from "react";
import { Row, FlexProps } from "@mpkelly/siam";
import { stop } from "../../util/Events";

export interface OverflowMenuProps extends FlexProps {
  items: OverflowItem[];
}

export interface OverflowItem {
  nameKey: string;
  onClick: (event?: any) => any;
}

//TODO
export const OverflowMenu = (props: OverflowMenuProps) => {
  const { files, ...rest } = props;
  return <Row {...rest} onClick={stop}></Row>;
};
