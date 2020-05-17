import React from "react";
import { FlexProps } from "@mpkelly/siam";
import { RenderItemParams } from "@atlaskit/tree";
import { TreeItemView } from "./TreeItemView";

export interface CollectionTreeItemViewProps
  extends FlexProps,
    RenderItemParams {}

export const CollectionTreeItemView = (props: CollectionTreeItemViewProps) => {
  return (
    <TreeItemView icon={"collection"} color="collection" {...props} canExpand />
  );
};
