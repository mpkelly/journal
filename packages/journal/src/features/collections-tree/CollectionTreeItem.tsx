import React from "react";
import { FlexProps } from "@mpkelly/siam";
import { CollectionsTreeItem } from "./CollectionsTreeItem";
import { TreeNode } from "@mpkelly/react-tree";

export interface CollectionTreeItemProps extends FlexProps {
  file: TreeNode;
  onRename(name: string): void;
}

export const CollectionTreeItem = (props: CollectionTreeItemProps) => {
  return (
    <CollectionsTreeItem
      icon={"collection"}
      color="collection"
      {...props}
      canExpand
    />
  );
};
