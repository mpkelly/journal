import React from "react";
import { FlexProps, MenuItemModel } from "@mpkelly/siam";
import { ItemData, ItemType } from "../content/ItemData";
import { ContainerPage } from "../container-page/ContainerPage";

export interface FolderPageProps extends FlexProps {
  item: ItemData;
}

export const FolderPage = (props: FolderPageProps) => {
  const { item, ...rest } = props;

  return <ContainerPage icon="folder" item={item} {...rest} />;
};
