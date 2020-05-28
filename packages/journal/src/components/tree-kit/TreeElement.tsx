import React, { ReactNode, useCallback } from "react";
import { TreeNode } from "./Node";
import { useTreeContext, TreeContextValue } from "./Tree";

export interface TreeElementProps {
  children: ReactNode;
  node: TreeNode;
  depth: number;
  dragDisabled?: boolean;
}

export const TreeElement = (props: TreeElementProps) => {
  const { node, children } = props;
  const { id } = node;
  const elementProps = useTreeElement(props);
  return (
    <div key={id} {...elementProps}>
      {children}
    </div>
  );
};

type DragHandler = (event: React.DragEvent<HTMLDivElement>) => void;

export const useTreeElement = (props: TreeElementProps) => {
  const { node, depth, dragDisabled } = props;
  const {
    overId,
    handleDrag,
    handleOver,
    handleDrop,
    readOnly,
  } = useTreeContext() as TreeContextValue;

  if (readOnly) {
    return {};
  }

  let onDragStart: DragHandler | undefined = undefined;

  if (!dragDisabled) {
    onDragStart = (event) => {
      event.dataTransfer.setData("text/rtk-id", String(node.id));
      event.dataTransfer.dropEffect = "move";
      handleDrag(node.id);
    };
  }

  const onDragOver: DragHandler = (event) => {
    handleOver(node.id);
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  };

  const onDragLeave: DragHandler = (event) => {
    handleOver(undefined);
  };

  const onDrop: DragHandler = useCallback(
    (event) => {
      event.preventDefault();
      if (overId && overId == node.id) {
        const id = event.dataTransfer.getData("text/rtk-id");
        handleDrop(id, node.id);
      }
    },
    [overId]
  );

  const elementProps: Object = {
    "data-rtk-node": node.id,
    "data-rtk-type": node.type,
    "data-rtk-depth": depth,
    draggable: !dragDisabled,
    onDragStart,
    onDragOver,
    onDragLeave,
    onDrop,
  };

  return elementProps;
};
