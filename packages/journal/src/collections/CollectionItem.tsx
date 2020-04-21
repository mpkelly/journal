import React, { useState, useRef, Fragment } from "react";
import { useCollections } from "./CollectionContext";
import { TreeItem, TreeItemProps } from "./TreeItem";
import { Show } from "../util/Show";
import { ColorPicker } from "../color-picker/ColorPicker";
import {
  CollectionIcon,
  FolderIcon,
  DeleteIcon,
  ColorIcon,
} from "../icons/IconNames";

export const CollectionItem = (props: TreeItemProps) => {
  const { collectionId, id } = props;
  const [] = useState(false);
  const { addFolder, getColor, setColor, deleteItem } = useCollections();
  const color = getColor(collectionId);
  const [showColorPicker, setShowColorPicker] = useState(false);
  const pickerPoint = useRef({ top: 0, left: 0 });
  const toggleColorPicker = (event?: any) => {
    if (event) {
      pickerPoint.current.left = event.clientX;
      pickerPoint.current.top = event.clientY;
    }
    setShowColorPicker((value) => !value);
  };

  const handleColorChange = (color: string) => {
    setColor(collectionId, color);
  };

  const items = [
    {
      nameKey: "addFolder",
      leftIconName: FolderIcon,
      onClick: () => addFolder(collectionId, id),
    },
    {
      nameKey: "changeColor",
      leftIconName: ColorIcon,
      onClick: toggleColorPicker,
    },
    {
      nameKey: "deleteCollection",
      leftIconName: DeleteIcon,
      onClick: () => deleteItem(collectionId, id),
    },
  ];

  return (
    <Fragment>
      <TreeItem
        {...props}
        color={color}
        icon={CollectionIcon}
        items={items}
        type="collection"
      />
      <Show when={showColorPicker}>
        <ColorPicker
          onClose={toggleColorPicker}
          onColorChange={handleColorChange}
          selectedColor={color}
          position={"absolute"}
          {...pickerPoint.current}
        />
      </Show>
    </Fragment>
  );
};
