import React from "react";
import { FlexProps, Row, Column } from "@mpkelly/siam";
import { OverlayLayer } from "../../ui-system/Layers";

export interface OverlayProps extends FlexProps {
  children?: any;
  onClick(event: any): any;
}

export const Overlay = (props: OverlayProps) => {
  const { onClick, children, ...rest } = props;
  return (
    <Row
      position="fixed"
      height={"100vh"}
      width="100vw"
      top={0}
      left={0}
      zIndex={OverlayLayer}
      onClick={onClick}
      onContextMenu={onClick}
      {...rest}
    >
      {children}
    </Row>
  );
};
