import React from "react";
import { FlexProps } from "@mpkelly/siam";
import { TreeItem } from "./TreeItem";
import { TreeNode } from "../../components/tree-kit/Node";

export interface WikiPageTreeItemProps extends FlexProps {
  file: TreeNode;
}

export const WikiPageTreeItem = (props: WikiPageTreeItemProps) => {
  return <TreeItem icon={"wikipage"} color="wikipage" {...props} />;
};
