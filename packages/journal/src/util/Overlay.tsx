import React from "react";
import { FlexProps, Flex } from "udx-react";
import { OverlayLayer } from "../style/Layers";

export interface OverlayProps extends FlexProps {
  children?: any;
  onClick(event: any): any;
}

export const Overlay = (props: OverlayProps) => {
  const { onClick, children, ...rest } = props;
  return (
    <Flex
      position="fixed"
      height={"100vh"}
      width="100vw"
      top={0}
      left={0}
      zIndex={OverlayLayer}
      onClick={onClick}
      onContextMenu={onClick}
      {...rest}>
      {children}
    </Flex>
  );
};
