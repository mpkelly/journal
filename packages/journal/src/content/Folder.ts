import { Item, ItemType } from "./Item";
import { Page } from "./Page";

export interface Folder extends Item {}

export const createNewFolder = (parentId: string): Page => {
  return {
    name: "New folder",
    path: [],
    parentId,
    type: ItemType.Folder,
    data: null
  };
};
