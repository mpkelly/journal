import db from "./Dexie";
import { Database, UnitOfDBWork } from "./Database";
import { ItemData } from "../content/ItemData";
import { JournalSettings, DefaultSettings } from "../settings/JournalSettings";
import { Tag } from "../tags/Tag";
import { importFromJsonFile, exportToJson } from "./BackupDB";
import { CollectionsData } from "../collections-tree/CollectionsData";
import { newId } from "../util/Identity";

const collections = db.table<CollectionsData, any>("collections");
const items = db.table<ItemData, any>("items");
const settings = db.table<JournalSettings, any>("settings");
const tags = db.table<Tag, any>("tags");

const ensureSettings = async () => {
  const records = await settings.toArray();
  if (records.length == 0) {
    await settings.add(DefaultSettings);
  }
};
ensureSettings();

export const IndexDBDatabase: Database = {
  getCollections: async () => {
    const result = await collections.toArray();
    return result[0];
  },
  updateCollections: async (updated: CollectionsData) => {
    collections.put(updated);
  },

  getItem: async (id: string): Promise<ItemData | undefined> => {
    return await items.get(id);
  },
  addItem: async (item: ItemData): Promise<void> => {
    if (!item.id) {
      item.id = newId();
    }
    item.locked = false;
    item.data = null;
    items.add(item, item.id);
  },

  updateItem: async (
    id: string,
    changes: Partial<ItemData>
  ): Promise<number> => {
    return items.update(id, changes);
  },

  getChildren: async (itemId: string, page: number, pageSize: number) => {
    const collectionData = await collections.toArray();
    const item = collectionData[0].items.find((item) => item.id === itemId);
    let results: ItemData[] = [];
    let count = 0;
    if (item) {
      // TODO look at optimising this. It shoudln't be an issue for listing
      // files and folders but could be for images later. See https://github.com/dfahlander/Dexie.js/issues/838
      count = await items.where("id").anyOf(item.children).count();
      results = await items
        .where("id")
        .anyOf(item.children)
        .reverse()
        .offset(page * pageSize)
        .limit(pageSize)
        .toArray();
    }
    return { items: results, count, page, pageSize };
  },
  getSettings: async (): Promise<JournalSettings> => {
    const records = await settings.toArray();
    return records[0];
  },

  updateSettings: async (updated: JournalSettings) => {
    return settings.update(updated.id, updated);
  },

  getTags: (): Promise<Tag[]> => {
    return tags.toArray();
  },
  addTag: () => {
    return tags.add({
      name: "My tag",
      color: "mediumseagreen",
    } as Tag);
  },
  deleteTag: (tag: Tag) => {
    return tags.delete(tag.id);
  },
  updateTag: (tag: Tag) => {
    return tags.update(tag.id, tag);
  },

  transact: (work: UnitOfDBWork, tables: string[]) => {
    return db.transaction("rw", tables, async () => {
      await work();
    });
  },

  exportDb: async () => {
    const json = await exportToJson(db.backendDB());
    return new Blob([json], { type: "application/json" });
  },
  importDb: (file: File) => {
    return importFromJsonFile(db.backendDB(), file, true);
  },

  delete: () => {
    return db.delete();
  },
};
