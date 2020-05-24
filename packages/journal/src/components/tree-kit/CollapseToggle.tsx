import React, { ReactNode } from "react";
import { TreeNode } from "./Node";
import { useTreeContext, TreeContextValue } from "./Tree";

export interface CollapseToggleProps {
  children: ReactNode;
  node: TreeNode;
}

export const CollapseToggle = (props: CollapseToggleProps) => {
  const { children, node } = props;
  const collapsed = !node.expanded;
  const { handleToggleCollapse } = useTreeContext() as TreeContextValue;
  if (!handleToggleCollapse) {
    throw Error(
      "It looks like you're trying to use CollapseToggle outside of the <Tree/> scope"
    );
  }
  return (
    <div
      data-rtk-collapse-toggle
      data-rtk-collapsed={collapsed}
      onClick={() => handleToggleCollapse(node)}
    >
      {children}
    </div>
  );
};
