export declare type NodeId = string | number;
export declare type NodeType = string | number;
export interface Node {
    id: NodeId;
    expanded: boolean;
    type: NodeType;
    accepts?: NodeType[];
    [key: string]: any;
}
export interface FlatNode extends Node {
    parentId: NodeId | undefined;
}
export interface TreeNode extends FlatNode {
    children: TreeNode[];
}
export declare type TreeNodeSort = (a: TreeNode, b: TreeNode) => number;
export declare const createAlphaNumericSort: (property: keyof TreeNode) => TreeNodeSort;
export declare const sortTree: (tree: TreeNode[], sortFunction: TreeNodeSort) => void;
export declare const toFlatNode: (node: TreeNode, parentId?: NodeId) => FlatNode;
export declare const toFlatNodes: (nodes: TreeNode[], parentId?: NodeId) => FlatNode[];
export declare const toTreeNode: (node: FlatNode) => TreeNode;
export declare const toTreeNodes: (nodes: FlatNode[]) => TreeNode[];
export declare const findTreeNodeById: (id: NodeId, nodes: TreeNode[], parent?: TreeNode | null) => {
    node?: TreeNode;
    parent?: TreeNode | null;
};
