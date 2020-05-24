export type NodeId = string | number;
export type NodeType = string | number;

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

export const toFlatNode = (node: TreeNode, parentId?: NodeId): FlatNode => {
  const { children, ...rest } = node;
  return { ...rest, parentId };
};

export const toFlatNodes = (
  nodes: TreeNode[],
  parentId?: NodeId
): FlatNode[] => {
  let items: FlatNode[] = [];
  nodes.forEach((node) => {
    items.push(toFlatNode(node, parentId));
    items = items.concat(toFlatNodes(node.children, node.id));
  });
  return items;
};

export const toTreeNode = (node: FlatNode): TreeNode => {
  return { ...node, children: [] };
};

export const toTreeNodes = (nodes: FlatNode[]): TreeNode[] => {
  const table = Object.create(null);
  nodes.forEach((node) => (table[node.id] = toTreeNode(node)));
  const tree: TreeNode[] = [];
  nodes.forEach((node) => {
    if (node.parentId) {
      table[node.parentId].children.push(table[node.id]);
    } else {
      tree.push(table[node.id]);
    }
  });
  return tree;
};

export const findTreeNodeById = (
  id: NodeId,
  nodes: TreeNode[],
  parent: TreeNode | null = null
): { node?: Node; parent?: Node | null } | null => {
  for (let node of nodes) {
    if (node.id === id) {
      return { node, parent };
    } else {
      const result = findTreeNodeById(id, node.children, node);
      if (result) {
        return result;
      }
    }
  }
  return null;
};
