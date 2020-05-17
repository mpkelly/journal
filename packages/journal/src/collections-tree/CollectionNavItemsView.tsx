import React, { Fragment } from "react";
import { Column, FlexProps } from "@mpkelly/siam";
import { NavItemView } from "../navigation/NavItemView";
import { CollectionsTreeView } from "./CollectionsTreeView";
import { CollectionsTreeProvider } from "./CollectionTreeContext";

export interface CollectionNavItemsViewProps extends FlexProps {}

export const CollectionNavItemsView = () => {
  return (
    <Fragment>
      <NavItemView
        icon="collection"
        labelKey="collections"
        type="library"
        path="/library"
      >
        <Column overflowY="auto" flexGrow={1} p="md">
          <CollectionsTreeProvider>
            <CollectionsTreeView />
          </CollectionsTreeProvider>
        </Column>
      </NavItemView>
      <NavItemView
        icon="template"
        labelKey="templates"
        type="templates"
        path="/templates"
      />
    </Fragment>
  );
};
