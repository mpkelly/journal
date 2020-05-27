import React from "react";
import { FlexProps } from "@mpkelly/siam";
import { TreeItem } from "./TreeItem";
import { TreeNode } from "../../components/tree-kit/Node";

export interface WikiPageTreeItemProps extends FlexProps {
  file: TreeNode;
  onRename(name: string): void;
}

export const WikiPageTreeItem = (props: WikiPageTreeItemProps) => {
  return <TreeItem icon={"wikipage"} color="wikipage" {...props} />;
};
