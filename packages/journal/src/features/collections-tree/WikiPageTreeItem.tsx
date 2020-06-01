import React from "react";
import { FlexProps } from "@mpkelly/siam";
import { CollectionsTreeItem } from "./CollectionsTreeItem";
import { TreeNode } from "@mpkelly/react-tree";

export interface WikiPageTreeItemProps extends FlexProps {
  file: TreeNode;
  onRename(name: string): void;
}

export const WikiPageTreeItem = (props: WikiPageTreeItemProps) => {
  return <CollectionsTreeItem icon={"wikipage"} color="wikipage" {...props} />;
};
