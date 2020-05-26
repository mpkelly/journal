import React, {
  useState,
  ReactNode,
  createContext,
  useContext,
  useCallback,
} from "react";
import {
  TreeNode,
  FlatNode,
  toTreeNodes,
  NodeId,
  Node,
  findTreeNodeById,
  toFlatNodes,
  TreeNodeSort,
  sortTree,
} from "./Node";
import { TreeElement } from "./TreeElement";

export interface TreeProps {
  nodes: FlatNode[];
  handleChange(node: FlatNode, property: keyof FlatNode, value: any): void;
  renderElement(node: TreeNode, depth: number): JSX.Element;
  sortFunction?: TreeNodeSort;
}

export interface TreeContextValue {
  overId?: NodeId;
  handleDrag(id?: NodeId): void;
  handleOver(id?: NodeId): void;
  handleDrop(dropped: NodeId, target?: NodeId): void;
  handleToggleCollapse(node: Node): void;
}

export const TreeContext = createContext<TreeContextValue | undefined>(
  undefined
);

export const useTreeContext = () => {
  return useContext(TreeContext);
};

export const Tree = (props: TreeProps) => {
  const { nodes, renderElement, handleChange, sortFunction } = props;
  const [dragId, setDragId] = useState<NodeId>();
  const [overId, setOverId] = useState<NodeId>();
  const treeNodes = toTreeNodes(nodes);
  if (sortFunction) {
    sortTree(treeNodes, sortFunction);
  }

  const handleDrop = (dropped: NodeId, target?: NodeId) => {
    if (target) {
      const node = nodes.find((node) => node.id === dropped);
      if (node && node?.parentId !== target) {
        handleChange(node, "parentId", target);
      }
    }
    setOverId(undefined);
  };

  const handleToggleCollapse = (node: TreeNode) => {
    handleChange(node, "expanded", !node.expanded);
  };

  const handleOver = useCallback(
    (overId?: NodeId) => {
      if (overId === undefined) {
        setOverId(undefined);
        return;
      }
      //Don't allow drop on self
      if (dragId === overId) {
        return;
      }
      const dragNode = nodes.find((node) => node.id === dragId);
      if (dragNode) {
        const overNode = nodes.find((node) => node.id === overId);
        if (overNode) {
          // Only allow dropping into declared types, if set
          if (overNode.accepts && !overNode.accepts.includes(dragNode.type)) {
            return;
          }
          const search = findTreeNodeById(dragId as NodeId, treeNodes);
          if (search && search.node) {
            const children = toFlatNodes(search.node.children);
            //Don't allow dropping into a child node
            if (children.find((child) => child.id == overId)) {
              return;
            }
          }
          setOverId(overId);
        }
      }
    },
    [dragId]
  );

  const renderTree = (nodes: TreeNode[], depth = 0) => {
    const result: ReactNode[] = [];
    nodes.forEach((node) => {
      const nodeItem = renderElement(node, depth);
      let children: ReactNode[] = [];
      if (node.expanded === undefined || node.expanded) {
        children = renderTree(node.children, depth + 1);
      }
      let props: any = {};
      if (node.id === overId && overId !== node.parentId) {
        props["data-rtk-drop-valid"] = true;
      }

      result.push(
        <div data-rtk-element-wrapper {...props}>
          <TreeElement node={node} depth={depth}>
            {nodeItem}
          </TreeElement>
          {children}
        </div>
      );
    });
    return result;
  };

  const tree = renderTree(treeNodes);

  const value: TreeContextValue = {
    overId,
    handleDrag: setDragId,
    handleOver,
    handleDrop,
    handleToggleCollapse,
  };

  return (
    <TreeContext.Provider value={value}>
      <div data-rtk-tree>{tree}</div>
    </TreeContext.Provider>
  );
};
