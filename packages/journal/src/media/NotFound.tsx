import React from "react";
import { Column, Icon, Text } from "udx-react";

export interface NotFoundProps {
  icon: string;
  labelKey: string;
}

export const NotFound = (props: NotFoundProps) => {
  const { icon, labelKey } = props;
  return (
    <Column
      width="100%"
      height="100%"
      border="1px solid dividers"
      justifyContent="center"
      alignItems="center">
      <Column alignItems="center">
        <Icon variant="xxlarge" color="muted" name={icon} mb="md" />
        <Text color="muted" variant="large" labelKey={labelKey} />
      </Column>
    </Column>
  );
};
