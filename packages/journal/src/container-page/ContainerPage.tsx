import React from "react";
import { Page } from "../page/Page";
import { MenuItemModel } from "@mpkelly/siam";
import { ItemData, ItemType } from "../content/ItemData";
import { ContainerPageProvider } from "../collection-page/ContainerPageContext";
import { HeaderView } from "./HeaderView";
import { ItemTableView } from "./ItemTableView";

export interface ContainerPageProps {
  item: ItemData;
  icon: string;
}

export const ContainerPage = (props: ContainerPageProps) => {
  const { icon, item } = props;
  return (
    <ContainerPageProvider itemId={item.id}>
      <Page position="relative" overflow="hidden">
        <HeaderView item={item} menuItems={menuItems} icon={icon} />
        {/* <Show when={!item.data}>
          <EmptyStateView
            icon="collection"
            labelKey="Collection is empty"
            position="absolute"
          />
        </Show> */}
        <ItemTableView size={"100%"} flexGrow={1} />
      </Page>
    </ContainerPageProvider>
  );
};

const menuItems: MenuItemModel[] = [
  {
    labelKey: "addFolder",
    iconName: "folder",
    itemType: ItemType.Folder,
  },
  {
    labelKey: "addDocumentPage",
    iconName: "document",
    itemType: ItemType.Document,
  },
  {
    labelKey: "addWikiPage",
    iconName: "wikipage",
    itemType: ItemType.WikiPage,
  },
];
