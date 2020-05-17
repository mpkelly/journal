import React from "react";
import { FlexProps, MenuItemModel } from "@mpkelly/siam";
import { ContainerPage } from "./ContainerPage";
import { ItemType, ItemData } from "../content/ItemData";

export interface CollectionsPageProps extends FlexProps {
  item: ItemData;
}

export const CollectionsPage = (props: CollectionsPageProps) => {
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
    <ContainerPage icon="collection" item={item} menuItems={items} {...rest} />
  );
};
