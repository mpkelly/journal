import React, { ReactNode } from "react";
import { Icon, FlexProps, Column, Row } from "@mpkelly/siam";
import useBoolean from "react-hanger/useBoolean";
import { Show } from "../../util/Show";

export interface CollapseProps extends FlexProps {
  title: ReactNode;
  children: ReactNode;
  initialCollapsed?: boolean;
}

export const Collapse = (props: CollapseProps) => {
  const { title, children, initialCollapsed, ...rest } = props;
  const collapsed = useBoolean(
    initialCollapsed === undefined ? true : !!initialCollapsed
  );
  const icon = collapsed.value ? "arrow-up" : "arrow-down";

  return (
    <Column width="100%" {...rest}>
      <Row
        alignItems="center"
        mb="sm"
        cursor="pointer"
        onClick={collapsed.toggle}
      >
        {title}
        <Icon
          name={icon}
          ml="auto"
          kind="small.button"
          color="secondary.text"
          transtion=".3s all"
        />
      </Row>
      <Show when={!collapsed.value}>{children}</Show>
    </Column>
  );
};
