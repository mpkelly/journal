import React, { Fragment } from "react";
import { Column, Icon } from "@mpkelly/siam";
import { NavItem } from "../navigation/NavItem";
import { CollectionsTreeView } from "../collections-tree/CollectionsTree";
import { useCollectionsTreeState } from "./CollectionsPageState";

export const CollectionsPageNavItems = () => {
  const { addCollection } = useCollectionsTreeState();
  return (
    <Fragment>
      <NavItem
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
        <Column overflowY="auto" flexGrow={1} px="md" height={"100%"}>
          <CollectionsTreeView />
        </Column>
      </NavItem>
      <NavItem
        icon="template"
        labelKey="templates"
        type="templates"
        path="/templates"
      />
    </Fragment>
  );
};
