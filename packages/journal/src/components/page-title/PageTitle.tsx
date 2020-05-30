import React from "react";
import { Text, Icon, FlexProps, Row } from "@mpkelly/siam";

export interface PageTitleProps extends FlexProps {
  title?: string;
}

export const PageTitle = (props: PageTitleProps) => {
  const { labelKey, iconName, title, ...rest } = props;
  return (
    <Row gravity="center-start" {...rest}>
      <Icon mr="md" name={iconName} />
      <Text kind="large" labelKey={labelKey} children={title} />
    </Row>
  );
};
