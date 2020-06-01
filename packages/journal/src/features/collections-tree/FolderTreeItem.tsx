import React from "react";
import { FlexProps } from "@mpkelly/siam";
import { CollectionsTreeItem } from "./CollectionsTreeItem";
import { TreeNode } from "@mpkelly/react-tree";

export interface FolderTreeItemProps extends FlexProps {
  file: TreeNode;
  onRename(name: string): void;
}

export const FolderTreeItem = (props: FolderTreeItemProps) => {
  return (
    <CollectionsTreeItem
      icon={"folder"}
      color={"folder"}
      {...props}
      canExpand
    />
  );
};
