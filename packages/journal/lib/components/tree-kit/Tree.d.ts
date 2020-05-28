import React from "react";
import { TreeNode, FlatNode, NodeId, Node, TreeNodeSort } from "./Node";
export interface TreeProps {
    nodes: FlatNode[];
    handleChange?(node: FlatNode, property: keyof FlatNode, value: any): void;
    renderElement(node: TreeNode, depth: number): JSX.Element;
    sortFunction?: TreeNodeSort;
    readOnly?: boolean;
}
export interface TreeContextValue {
    overId?: NodeId;
    handleDrag(id?: NodeId): void;
    handleOver(id?: NodeId): void;
    handleDrop(dropped: NodeId, target?: NodeId): void;
    handleToggleCollapse(node: Node): void;
    readOnly: boolean;
}
export declare const TreeContext: React.Context<TreeContextValue>;
export declare const useTreeContext: () => TreeContextValue;
export declare const Tree: (props: TreeProps) => JSX.Element;
