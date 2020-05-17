import React from "react";
import ATree, {
  mutateTree,
  moveItemOnTree,
  RenderItemParams,
  TreeData,
  ItemId,
  TreeSourcePosition,
  TreeDestinationPosition,
} from "@atlaskit/tree";
import { Column } from "@mpkelly/siam";
import { useCallback } from "react";
import { ReactNode } from "react";

export interface TreeProps {
  renderItem(props: RenderItemParams): ReactNode;
  isValid(
    source: TreeSourcePosition,
    destination?: TreeDestinationPosition
  ): boolean;
  tree: TreeData;
  onChange(tree: TreeData): void;
}

export const Tree = (props: TreeProps) => {
  const { tree, renderItem, onExpand, onCollapse, onDragEnd } = useTreeView(
    props
  );
  return (
    <Column overflow="auto" flexGrow={1} flexShrink={0}>
      <ATree
        tree={tree}
        renderItem={renderItem}
        onDragStart={console.log}
        onExpand={onExpand}
        onCollapse={onCollapse}
        onDragEnd={onDragEnd}
        offsetPerLevel={20}
        isDragEnabled
        isNestingEnabled
      />
    </Column>
  );
};

const useTreeView = (props: TreeProps) => {
  const { tree, renderItem, onChange, isValid } = props;

  const onExpand = useCallback(
    (itemId: ItemId) => {
      onChange(mutateTree(tree, itemId, { isExpanded: true }));
    },
    [tree]
  );

  const onCollapse = useCallback(
    (itemId: ItemId) => {
      onChange(mutateTree(tree, itemId, { isExpanded: false }));
    },
    [tree]
  );

  const onDragEnd = useCallback(
    (
      source: TreeSourcePosition,
      destination?: TreeDestinationPosition | undefined
    ) => {
      if (!destination) {
        return;
      }
      console.log(isValid(source, destination));
      if (isValid(source, destination)) {
        onChange(moveItemOnTree(tree, source, destination));
      }
    },
    [tree]
  );

  return { tree, renderItem, onExpand, onCollapse, onDragEnd };
};
