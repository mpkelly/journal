import React from "react";
import { Page } from "../page/Page";
import { MenuItemModel } from "@mpkelly/siam";
import { ItemData } from "../content/ItemData";
import { ContainerPageProvider } from "./ContainerPageContext";
import { HeaderView } from "../container-page/HeaderView";
import { ItemTableView } from "../container-page/ItemTableView";

export interface ContainerPageProps {
  item: ItemData;
  menuItems: MenuItemModel[];
  icon: string;
}

export const ContainerPage = (props: ContainerPageProps) => {
  const { icon, item, menuItems } = props;
  return (
    <ContainerPageProvider itemId={item.id}>
      <Page position="relative">
        <HeaderView item={item} menuItems={menuItems} icon={icon} />
        {/* <Show when={!item.data}>
          <EmptyStateView
            icon="collection"
            labelKey="Collection is empty"
            position="absolute"
          />
        </Show> */}
        <ItemTableView size={"100%"} />
      </Page>
    </ContainerPageProvider>
  );
};
