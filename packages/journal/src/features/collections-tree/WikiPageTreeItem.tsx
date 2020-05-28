import React from "react";
import { FlexProps } from "@mpkelly/siam";
import { CollectionsTreeItem } from "./CollectionsTreeItem";
import { TreeNode } from "../../components/tree-kit/Node";

export interface WikiPageTreeItemProps extends FlexProps {
  file: TreeNode;
  onRename(name: string): void;
}

export const WikiPageTreeItem = (props: WikiPageTreeItemProps) => {
  return <CollectionsTreeItem icon={"wikipage"} color="wikipage" {...props} />;
};
