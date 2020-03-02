import React, { CSSProperties, memo } from "react";
import { FileTree, isParentCollapsed } from "../file-tree/FileTree";
import { Item, ItemType } from "../content/Item";
import { useCollections } from "./CollectionContext";
import { flatten } from "react-sortly";
import { PageItem } from "./PageItem";
import { FolderItem } from "./FolderItem";
import { CollectionItem } from "./CollectionItem";
import { TreeItemProps } from "./TreeItem";

export interface FileTreeProps {
  items: Item[];
  id: any;
}

export const CollectionTree = (props: FileTreeProps) => {
  const { id } = props;
  const renderItem = (props: any) => (
    <ItemRenderer
      {...props}
      items={props.items}
      onToggleCollapse={props.handleToggleCollapse}
    />
  );
  const { updateItems } = useCollections();

  const handleChange = (items: Item[]) => {
    updateItems(id, flatten(items));
  };
  return (
    <FileTree renderItem={renderItem} onChange={handleChange} {...props} />
  );
};

const itemStyle = {
  padding: 10,
  marginBottom: 4
};

const muteStyle = { opacity: 0.3 };

const ItemRenderer = memo((props: any) => {
  const {
    id,
    itemId,
    name,
    index,
    onToggleCollapse,
    path,
    items,
    type,
    collapsed,
    connectDragSource,
    connectDropTarget,
    isDragging,
    isClosestDragging
  } = props;
  const style = {
    ...itemStyle,
    ...(isDragging || isClosestDragging ? muteStyle : null),
    width: "100%",
    paddingLeft: 16 + path.length * 8,
    paddingRight: 16
  };
  const handleClick = () => {
    if (type === ItemType.Folder || type === ItemType.Collection) {
      onToggleCollapse(index);
    }
  };
  if (isParentCollapsed(path, items)) {
    return null;
  }
  const itemProps: TreeItemProps = {
    name,
    collectionId: id,
    style,
    collapsed,
    id: itemId,
    onClick: handleClick,
    icon: ""
  };
  const el = <div className="tree-item">{createElement(type, itemProps)}</div>;
  return connectDragSource(connectDropTarget(el));
});

const createElement = (type: ItemType, props: TreeItemProps) => {
  switch (type) {
    case ItemType.Page:
      return <PageItem {...props} />;
    case ItemType.Folder:
      return <FolderItem {...props} />;
    case ItemType.Collection:
      return <CollectionItem {...props} />;
  }
};
