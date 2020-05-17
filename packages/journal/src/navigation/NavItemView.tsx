import React, { ReactNode, Fragment } from "react";
import { Row, Icon, Text, Show, ElementProps } from "@mpkelly/siam";
import { Link } from "../routing/Link";
import { useLocation } from "react-router-dom";

export interface NavItemViewProps extends ElementProps<any> {
  icon: string;
  labelKey: string;
  path: string;
  type: string;
  children?: ReactNode;
}

export const NavItemView = (props: NavItemViewProps) => {
  const { icon, labelKey, path, type, children, ...rest } = props;
  const { pathname } = useLocation();
  const isActive = pathname.startsWith(path);
  return (
    <Fragment>
      <Link to={path}>
        <Row
          alignItems="center"
          selected={isActive}
          selectedBackgroundColor={"muted-alpha10"}
          borderRadius="sm"
          p={10}
          mx="md"
          data-id={type}
          {...rest}
        >
          <Icon
            name={icon}
            color="secondary.text"
            selectedColor={"accent"}
            selected={isActive}
          />
          <Text ml="md" labelKey={labelKey} />
        </Row>
      </Link>
      <Show when={isActive}>{children}</Show>
    </Fragment>
  );
};
