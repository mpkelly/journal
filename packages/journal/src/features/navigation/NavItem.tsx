import React, { ReactNode, Fragment } from "react";
import { Row, Icon, Text, Show, ElementProps } from "@mpkelly/siam";
import { Link } from "../routing/Link";

export interface NavItemProps extends ElementProps<any> {
  icon: string;
  labelKey: string;
  path: string;
  type: string;
  children?: ReactNode;
  rightContent?: ReactNode;
}

export const NavItem = (props: NavItemProps) => {
  const { icon, labelKey, path, type, children, rightContent, ...rest } = props;
  const { hash } = window.location;
  const isActive = hash.startsWith(`#${path}`);
  return (
    <Fragment>
      <Link to={path} {...rest}>
        <Row
          alignItems="center"
          selected={isActive}
          selectedBackgroundColor={"muted-alpha10"}
          hoverBackgroundColor={"muted-alpha10"}
          borderRadius="sm"
          p={10}
          my="md"
          mx="md"
          data-id={type}
        >
          <Icon
            name={icon}
            color="secondary.text"
            selectedColor={"accent"}
            selected={isActive}
          />
          <Text
            ml="md"
            color={"secondary.text"}
            selectedColor="primary.text"
            selected={isActive}
            labelKey={labelKey}
          />
          <Show when={rightContent}>{rightContent}</Show>
        </Row>
      </Link>
      <Show when={isActive}>{children}</Show>
    </Fragment>
  );
};
