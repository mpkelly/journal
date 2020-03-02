import React from "react";
import { useCollections } from "./CollectionContext";
import { TreeItemProps, TreeItem } from "./TreeItem";
import { PageIcon, DeleteIcon } from "../icons/IconNames";

export const PageItem = (props: TreeItemProps) => {
  const { collectionId, id } = props;
  const { deleteItem } = useCollections();
  const items = [
    {
      nameKey: "delete",
      leftIconName: DeleteIcon,
      onClick: () => deleteItem(collectionId, id)
    }
  ];
  return <TreeItem {...props} icon={PageIcon} items={items} />;
};
