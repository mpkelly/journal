import { TreeItem } from "../tree/TreeItem";
import { ItemType, ItemData } from "../content/ItemData";

export interface CollectionsData {
  id: "root";
  root: CollectionsItemData;
  items: CollectionsItemData[];
}

export interface CollectionsItemData extends TreeItem {
  name?: string;
  type?: ItemType;
}

export const createEmptyCollections = (): CollectionsData => ({
  id: "root",
  root: { id: "root", children: [], hasChildren: false, isExpanded: true },
  items: [],
});

export const createNewCollectionItem = (
  id: string,
  name: string,
  type: ItemType
): CollectionsItemData => {
  return {
    id,
    children: [],
    hasChildren: false,
    isExpanded: false,
    type,
    name,
  };
};
