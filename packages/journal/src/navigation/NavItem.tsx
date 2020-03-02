import React from "react";
import { Row, Icon, Text } from "udx-react";
import { Link } from "../routing/Link";
import { isRouteSelected } from "../routing/Router";

export interface NavItemProps {
  icon: string;
  labelKey: string;
  path: string;
}

export const NavItem = (props: NavItemProps) => {
  const { icon, labelKey, path } = props;
  const isSelected = isRouteSelected(path);
  const background = isSelected ? "nav_selected" : undefined;
  return (
    <Link to={path}>
      <Row
        alignItems="center"
        backgroundColor={background}
        borderRadius="sm"
        p={10}
        mx="md"
      >
        <Icon name={icon} color="nav_secondaryText" />
        <Text ml="md" labelKey={labelKey} color="nav_primaryText" />
      </Row>
    </Link>
  );
};
