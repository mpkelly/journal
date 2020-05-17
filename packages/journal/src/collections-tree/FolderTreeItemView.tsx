import React from "react";
import { FlexProps } from "@mpkelly/siam";
import { RenderItemParams } from "@atlaskit/tree";
import { TreeItemView } from "./TreeItemView";

export interface FolderTreeItemViewProps extends FlexProps, RenderItemParams {}

export const FolderTreeItemView = (props: FolderTreeItemViewProps) => {
  return <TreeItemView icon={"folder"} color={"folder"} {...props} canExpand />;
};
