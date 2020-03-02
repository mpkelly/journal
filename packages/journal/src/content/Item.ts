export interface Item {
  id?: any;
  name: string;
  path: number[];
  parentId: string | null;
  type: ItemType;
  collapsed?: boolean;
  data?: any;
  locked?: boolean;
}

export enum ItemType {
  Page,
  Folder,
  Collection
}
