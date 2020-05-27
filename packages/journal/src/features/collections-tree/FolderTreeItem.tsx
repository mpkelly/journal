import React from "react";
import { FlexProps } from "@mpkelly/siam";
import { TreeItem } from "./TreeItem";
import { TreeNode } from "../../components/tree-kit/Node";

export interface FolderTreeItemProps extends FlexProps {
  file: TreeNode;
  onRename(name: string): void;
}

export const FolderTreeItem = (props: FolderTreeItemProps) => {
  return <TreeItem icon={"folder"} color={"folder"} {...props} canExpand />;
};
