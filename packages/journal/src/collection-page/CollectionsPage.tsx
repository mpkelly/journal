import React from "react";
import { FlexProps, MenuItemModel } from "@mpkelly/siam";
import { ContainerPage } from "../container-page/ContainerPage";
import { ItemType, ItemData } from "../content/ItemData";

export interface CollectionsPageProps extends FlexProps {
  item: ItemData;
}

export const CollectionsPage = (props: CollectionsPageProps) => {
  const { item, ...rest } = props;
  return <ContainerPage icon="collection" item={item} {...rest} />;
};
