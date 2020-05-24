import React from "react";
import { FlexProps } from "@mpkelly/siam";
import { TreeItem } from "./TreeItem";
import { TreeNode } from "../../components/tree-kit/Node";

export interface DocumenTreeItemProps extends FlexProps {
  file: TreeNode;
}

export const DocumenTreeItem = (props: DocumenTreeItemProps) => {
  return <TreeItem icon={"document"} color="document" {...props} />;
};
