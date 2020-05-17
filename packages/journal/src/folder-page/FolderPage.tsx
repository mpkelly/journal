import React from "react";
import { FlexProps, MenuItemModel } from "@mpkelly/siam";
import { ItemData, ItemType } from "../content/ItemData";
import { ContainerPage } from "../collection-page/ContainerPage";

export interface FolderPageProps extends FlexProps {
  item: ItemData;
}

export const FolderPage = (props: FolderPageProps) => {
  const { item, ...rest } = props;
  const items: MenuItemModel[] = [
    {
      labelKey: "addFolder",
      iconName: "folder",
      itemType: ItemType.Folder,
    },
    {
      labelKey: "addDocument",
      iconName: "file",
      itemType: ItemType.Page,
    },
  ];
  return (
    <ContainerPage icon="folder" item={item} menuItems={items} {...rest} />
  );
};
