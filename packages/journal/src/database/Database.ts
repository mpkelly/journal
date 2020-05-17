import { ItemData } from "../content/ItemData";
import { JournalSettings } from "../settings/JournalSettings";
import { Tag } from "../tags/Tag";
import { CollectionsData } from "../collections-tree/CollectionsData";

export interface Database {
  getCollections(): Promise<CollectionsData>;
  updateCollections(collections: CollectionsData): Promise<void>;

  getItem(id: string): Promise<ItemData | undefined>;
  addItem(item: ItemData): Promise<void>;
  updateItem(id: string, changes: Partial<ItemData>): Promise<number>;
  getChildren(
    id: string,
    page: number,
    pageSize: number
  ): Promise<PagedResult<ItemData>>;

  getSettings(): Promise<JournalSettings>;
  updateSettings(settings: JournalSettings): Promise<number>;

  getTags(): Promise<Tag[]>;
  addTag(): Promise<void>;
  deleteTag(tag: Tag): Promise<void>;
  updateTag(tag: Tag): Promise<number>;

  transact(work: UnitOfDBWork, tables: string[]): Promise<void>;

  exportDb(): Promise<Blob>;
  importDb(file: File): Promise<void>;

  delete(): Promise<void>;
}

export type UnitOfDBWork = () => Promise<void>;

export type PagedResult<T> = {
  count: number;
  pageSize: number;
  page: number;
  items: T[];
};
