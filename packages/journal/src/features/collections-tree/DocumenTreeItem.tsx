import React from "react";
import { FlexProps } from "@mpkelly/siam";
import { CollectionsTreeItem } from "./CollectionsTreeItem";
import { TreeNode } from "@mpkelly/react-tree";

export interface DocumenTreeItemProps extends FlexProps {
  file: TreeNode;
  onRename(name: string): void;
}

export const DocumenTreeItem = (props: DocumenTreeItemProps) => {
  return <CollectionsTreeItem icon={"document"} color="document" {...props} />;
};
