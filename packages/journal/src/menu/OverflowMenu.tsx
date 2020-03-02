import React from "react";
import { Row, Picker, Icon, FlexProps } from "udx-react";
import { stop } from "../util/Events";

export interface OverflowMenuProps extends FlexProps {
  items: OverflowItem[];
}

export interface OverflowItem {
  nameKey: string;
  onClick: (event?: any) => any;
}

export const OverflowMenu = (props: OverflowMenuProps) => {
  const { items, ...rest } = props;
  return (
    <Row {...rest} onClick={stop}>
      <Picker variant={"muted"} items={items}>
        <Icon name="more_vert" variant="small" />
      </Picker>
    </Row>
  );
};
