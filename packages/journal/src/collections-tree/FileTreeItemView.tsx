import React from "react";
import { FlexProps } from "@mpkelly/siam";
import { RenderItemParams } from "@atlaskit/tree";
import { TreeItemView } from "./TreeItemView";

export interface FileTreeItemViewProps extends FlexProps, RenderItemParams {}

export const FileTreeItemView = (props: FileTreeItemViewProps) => {
  return <TreeItemView icon={"document"} color="document" {...props} />;
};
