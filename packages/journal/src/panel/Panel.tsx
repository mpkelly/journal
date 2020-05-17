import React from "react";
import { FlexProps, Row } from "@mpkelly/siam";

export interface PanelProps extends FlexProps {}

export const Panel = (props: PanelProps) => {
  return <Row backgroundColor="content" p="lg" borderRadius="sm" {...props} />;
};
