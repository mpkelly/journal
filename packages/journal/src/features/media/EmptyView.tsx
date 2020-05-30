import React from "react";
import { Column, Icon, Text, FlexProps } from "@mpkelly/siam";

export interface NotFoundProps extends FlexProps {
  icon: string;
  labelKey: string;
}

export const EmptyView = (props: NotFoundProps) => {
  const { icon, labelKey, ...rest } = props;
  return (
    <Column
      width="100%"
      height="100%"
      border="1px solid dividers"
      gravity="center"
      {...rest}
    >
      <Column alignItems="center">
        <Icon kind="xlarge" color="muted" name={icon} mb="md" />
        <Text color="muted" kind="large" labelKey={labelKey} />
      </Column>
    </Column>
  );
};
