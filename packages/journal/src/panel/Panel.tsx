import React from "react";
import { FlexProps, Flex } from "udx-react";

export interface PanelProps extends FlexProps {}

export const Panel = (props: PanelProps) => {
  return (
    <Flex
      backgroundColor="content_background"
      p="lg"
      borderRadius="sm"
      {...props}
    />
  );
};
