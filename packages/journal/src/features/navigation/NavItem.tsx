import React, { ReactNode, Fragment } from "react";
import { Row, Icon, Text, Show, ElementProps } from "@mpkelly/siam";
import { Link } from "../../components/link/Link";
import { useParams, useHistory } from "react-router-dom";

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
  useParams();
  const history = useHistory();
  const { pathname } = history.location;
  const isActive = pathname && pathname.startsWith(path);
  return (
    <Fragment>
      <Link to={path} {...rest}>
        <Row
          borderRadius="sm"
          p={10}
          my="md"
          mx="md"
          data-id={type}
          alignItems="center"
          selected={isActive}
          selectedBackgroundColor={"muted-alpha50"}
          hoverBackgroundColor={"muted-alpha50"}
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
      {children}
    </Fragment>
  );
};
