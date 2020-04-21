import React from "react";
import { useCollections } from "./CollectionContext";
import { TreeItem, TreeItemProps } from "./TreeItem";
import { FolderIcon, PageIcon, DeleteIcon } from "../icons/IconNames";

export const FolderItem = (props: TreeItemProps) => {
  const { collectionId, id } = props;
  const { addFolder, addPage, deleteItem } = useCollections();

  const items = [
    {
      nameKey: "addPage",
      leftIconName: PageIcon,
      onClick: () => addPage(collectionId, id),
    },
    {
      nameKey: "addFolder",
      leftIconName: FolderIcon,
      onClick: () => addFolder(collectionId, id),
    },
    {
      nameKey: "deleteFolder",
      leftIconName: DeleteIcon,
      onClick: () => deleteItem(collectionId, id),
    },
  ];

  return <TreeItem {...props} icon={FolderIcon} items={items} type="folder" />;
};
