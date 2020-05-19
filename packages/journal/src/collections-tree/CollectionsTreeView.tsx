import React, { memo } from "react";
import {
  RenderItemParams,
  TreeData,
  ItemId,
  TreeItem,
  TreeSourcePosition,
  TreeDestinationPosition,
} from "@atlaskit/tree";
import { FlexProps, Column } from "@mpkelly/siam";
import { useCollectionsTree } from "./CollectionTreeContext";
import { CollectionsData, CollectionsItemData } from "./CollectionsData";
import { Tree } from "../tree/Tree";
import { ItemType } from "../content/ItemData";
import { CollectionTreeItemView } from "./CollectionTreeItemView";
import { FolderTreeItemView } from "./FolderTreeItemView";
import { FileTreeItemView } from "./FileTreeItemView";
import { useParams } from "react-router-dom";

export interface CollectionsTreeViewProps extends FlexProps {}

export const CollectionsTreeView = memo((props: CollectionsTreeViewProps) => {
  const { ...rest } = props;
  const { collections, updateCollections } = useCollectionsTree();

  const handleChange = (tree: TreeData) => {
    updateCollections(createCollectionsData(tree));
  };

  const { itemId } = useParams();

  const renderItem = (props: RenderItemParams) => {
    const { item } = props;
    const selected = item.id === itemId;
    switch (item.data.type) {
      case ItemType.Collection:
        return <CollectionTreeItemView selected={selected} {...props} />;
      case ItemType.Folder:
        return <FolderTreeItemView selected={selected} {...props} />;
      case ItemType.Document:
        return <FileTreeItemView selected={selected} {...props} />;
      case ItemType.WikiPage:
        return <FileTreeItemView selected={selected} {...props} />;
    }
    throw Error("Unhandled item " + JSON.stringify(item));
  };

  return (
    <Column {...rest}>
      <Tree
        renderItem={renderItem}
        isValid={(source, destination) =>
          isValid(collections, source, destination)
        }
        tree={createTreeData(collections)}
        onChange={handleChange}
      />
    </Column>
  );
});

export const isValid = (
  collections: CollectionsData,
  source: TreeSourcePosition,
  destination?: TreeDestinationPosition
) => {
  if (!destination) {
    return false;
  }
  const parentItem = collections.items.find(
    (item) => item.id === source.parentId
  );
  const destinationItem = collections.items.find(
    (item) => item.id === destination.parentId
  );

  if (parentItem && destinationItem) {
    const sourceItem = collections.items.find(
      (item) => item.id === parentItem.children[source.index]
    );
    if (sourceItem) {
      if (sourceItem.type === ItemType.Collection) {
        //Collections can only be moved around the root and can be nested
        return destination.parentId === "root";
      } else if (sourceItem.type === ItemType.Folder) {
        //Folders can be move into collections or other folders
        return (
          destinationItem.type === ItemType.Collection ||
          destinationItem.type === ItemType.Folder
        );
      } else {
        //it's a file or page which can be moved anywhere except for root
        return (
          destination.parentId !== "root" &&
          destinationItem.type !== ItemType.WikiPage &&
          destinationItem.type !== ItemType.Document
        );
      }
    }
  }
  return false;
};

export const createTreeData = (collections: CollectionsData): TreeData => {
  const items: Record<ItemId, TreeItem> = {
    root: collections.root,
  };
  collections.items.forEach((item) => {
    const { id, children, hasChildren, isExpanded, type, name } = item;
    items[id] = {
      id,
      children,
      hasChildren,
      isExpanded,
      isChildrenLoading: false,
      data: {
        name,
        type,
      },
    };
  });

  return {
    rootId: "root",
    items,
  };
};

export const createCollectionsData = (tree: TreeData): CollectionsData => {
  const entries: TreeItem[] = Object.values(tree.items);
  const rootIndex = entries.findIndex((entry) => entry.id === "root");
  const [root] = entries.splice(rootIndex, 1);
  return {
    id: "root",
    root: root as CollectionsItemData,
    items: entries.map((entry) => ({
      ...entry,
      ...entry.data,
      data: undefined,
    })) as CollectionsItemData[],
  };
};
