import { Collection } from "../collections/Collection";
import { Item } from "../content/Item";
import { WikiSettings } from "../settings/WikiSettings";
import { Tag } from "../tags/Tag";

export interface Database {
  loadCollections(): Promise<Collection[]>;
  getCollection(id: any): Promise<Collection | undefined>;
  updateCollection(collection: Collection): Promise<any>;
  getItem(collectionId: any, id: any): Promise<Item | undefined>;
  addItem(collectionId: any, item: Item): Promise<void>;
  renameItem(collectionId: any, id: string, name: string): Promise<void>;
  updateItemData(collectionId: any, id: any, data: any): Promise<void>;
  updateItem(collectionId: any, id: string, changes: Object): Promise<void>;
  updateItems(collectonId: any, items: Item[]): Promise<void>;
  deleteCollection(collectionId: any): Promise<void>;
  addCollection(): Promise<void>;
  loadSettings(): Promise<WikiSettings>;
  updateSettings(settings: WikiSettings): Promise<number>;
  loadTags(): Promise<Tag[]>;
  addTag(): Promise<void>;
  deleteTag(tag: Tag): Promise<void>;
  updateTag(tag: Tag): Promise<number>;
  exportDb(): Promise<Blob>;
  importDb(file: File): Promise<void>;
  delete(): Promise<void>;
}

export const CollectionChangedEvent = "collection-changed";
export const ItemChangedEvent = "item-changed";
