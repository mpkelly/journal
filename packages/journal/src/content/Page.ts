import { Item, ItemType } from "./Item";

export interface Page extends Item {}

export const createNewPage = (parentId: string): Page => {
  return {
    name: "New page",
    path: [],
    parentId,
    type: ItemType.Page,
    data: null
  };
};
