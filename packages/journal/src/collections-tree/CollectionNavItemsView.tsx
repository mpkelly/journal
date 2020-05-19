import React, { Fragment } from "react";
import { Column, FlexProps, Icon } from "@mpkelly/siam";
import { NavItemView } from "../navigation/NavItemView";
import { CollectionsTreeView } from "./CollectionsTreeView";
import { useCollectionsTree } from "./CollectionTreeContext";

export interface CollectionNavItemsViewProps extends FlexProps {}

export const CollectionNavItemsView = () => {
  const { addCollection } = useCollectionsTree();
  return (
    <Fragment>
      <NavItemView
        icon="collection"
        labelKey="collections"
        type="library"
        path="/library"
        rightContent={
          <Icon
            kind="button"
            name={"add"}
            size="small"
            ml="auto"
            onClick={addCollection}
            data-id="add-collection"
          />
        }
      >
        <Column overflowY="auto" flexGrow={1} px="md">
          <CollectionsTreeView />
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
