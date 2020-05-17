export interface ItemData {
  id?: any;
  name: string;
  type: ItemType;
  data?: any;
  locked?: boolean;
}

export enum ItemType {
  Page,
  Folder,
  Collection,
  File,
}

export const createCollectionItem = (id: string, name: string) => {
  return createItem(id, name, ItemType.Collection);
};

export const createItem = (id: string, name: string, type: ItemType) => {
  return { id, name, type };
};
