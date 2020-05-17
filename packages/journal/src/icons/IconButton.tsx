import React from "react";
import { IconProps, Row, FlexProps, Icon } from "@mpkelly/siam";

export interface IconButtonProps extends IconProps {
  buttonProps?: FlexProps;
}

export const IconButton = (props: IconButtonProps) => {
  const { buttonProps, ...rest } = props;
  return (
    <Row
      p="sm"
      borderRadius="sm"
      cursor="pointer"
      activeBackgroundColor="muted.D100"
      hoverBackgroundColor="muted.A500"
      color="muted"
      hoverColor="primaryText"
      {...(buttonProps || {})}
    >
      <Icon color="inherit" {...rest} />
    </Row>
  );
};
