import React, { useState, useEffect } from "react";
import { DndProvider } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";
import Sortly from "react-sortly";
import { ItemType, Item } from "../content/Item";
import { convert } from "react-sortly";

export interface FileTreeProps {
  items: Item[];
  id: any;
  renderItem(props: any): any;
  onChange(items: Item[]): void;
}

export const FileTree = (props: FileTreeProps) => {
  const { renderItem, id, onChange } = props;
  const [items, setItems] = useState<Item[]>(convert(props.items));

  useEffect(() => {
    setItems(convert(props.items));
  }, [props.items]);

  const handleChange = (items: Item[]) => {
    setItems(convert(items));
    onChange(items);
  };

  const handleMove = (items: Item[], index: number, newIndex: number) => {
    const thing = items[newIndex];

    const parent = items.find(
      item => item.id === thing.path[thing.path.length - 1]
    );

    if (!parent && items[index].type == ItemType.Page) {
      return false;
    }

    if (parent && parent.type === ItemType.Page) {
      return false;
    }

    if (parent && parent.collapsed) {
      parent.collapsed = false;
      setItems(items.slice());
      return true;
    }
    return true;
  };

  const handleToggleCollapse = (index: number) => {
    const parent = items[index];
    parent.collapsed = !parent.collapsed;
    setItems(items.slice());
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <Sortly
        items={items}
        onMove={handleMove}
        itemRenderer={(props: any) => {
          return renderItem({
            ...props,
            items,
            itemId: props.id,
            id,
            handleToggleCollapse
          });
        }}
        onChange={handleChange}
      />
    </DndProvider>
  );
};

export const isParentCollapsed = (path: number[], items: Item[]) => {
  for (let node of path) {
    const item = items.find(item => item.id == node);
    if (item && item.collapsed) {
      return true;
    }
  }
  return false;
};
