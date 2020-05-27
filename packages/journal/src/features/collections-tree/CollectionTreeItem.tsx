import React from "react";
import { FlexProps } from "@mpkelly/siam";
import { TreeItem } from "./TreeItem";
import { TreeNode } from "../../components/tree-kit/Node";

export interface CollectionTreeItemProps extends FlexProps {
  file: TreeNode;
  onRename(name: string): void;
}

export const CollectionTreeItem = (props: CollectionTreeItemProps) => {
  return (
    <TreeItem icon={"collection"} color="collection" {...props} canExpand />
  );
};
