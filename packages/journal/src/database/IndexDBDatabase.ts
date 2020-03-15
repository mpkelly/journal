import { Database, CollectionChangedEvent, ItemChangedEvent } from "./Database";
import { Item, ItemType } from "../content/Item";
import { Collection } from "../collections/Collection";
import { dispatchEvent } from "../util/Events";
import * as shortid from "shortid";
import db from "./Dexie";
import { JournalSettings, DefaultSettings } from "../settings/JournalSettings";
import { Tag } from "../tags/Tag";
import { importFromJsonFile, exportToJson } from "./BackupDB";

const collections = db.table<Collection, any>("collections");
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
  loadCollections: async () => {
    return await collections.toArray();
  },
  getCollection: async (id: any) => {
    return collections.get(id);
  },
  updateCollection: async (collection: Collection) => {
    collections.put(collection);
    dispatchEvent(CollectionChangedEvent);
  },
  getItem: async (collectionId: any, id: any): Promise<Item | undefined> => {
    const collection = await collections.get(collectionId);
    if (collection) {
      return collection.content.find(item => item.id == id);
    }
    return undefined;
  },
  addItem: async (collectionId: any, item: Item): Promise<void> => {
    const collection = await collections.get(collectionId);
    if (collection) {
      item.id = shortid.generate();
      item.locked = false;
      item.data = null;
      const content = collection.content.concat([item]);
      await collections.update(collectionId, { content });
      dispatchEvent(CollectionChangedEvent);
    }
  },

  renameItem: async (
    collectionId: any,
    id: string,
    name: string
  ): Promise<void> => {
    const collection = await collections.get(collectionId);

    if (collection) {
      const content = collection.content.slice();
      const item = content.find(item => item.id === id);
      if (item) {
        item.name = name;
        await collections.update(collectionId, { content });
        dispatchEvent(ItemChangedEvent);
      }
    }
  },
  updateItem: async (
    collectionId: any,
    id: string,
    changes: Object
  ): Promise<void> => {
    const collection = await collections.get(collectionId);
    if (collection) {
      const content = collection.content.slice();
      let index = content.findIndex(item => item.id === id);
      if (index > -1) {
        content[index] = { ...content[index], ...changes };
        await collections.update(collectionId, { content });
        dispatchEvent(ItemChangedEvent);
      }
    }
  },
  updateItems: async (collectionId: any, items: Item[]): Promise<void> => {
    const collection = await collections.get(collectionId);
    if (collection) {
      await collections.update(collectionId, { content: items });
      dispatchEvent(CollectionChangedEvent);
    }
  },
  updateItemData: async (
    collectionId: any,
    id: number,
    data: any
  ): Promise<void> => {
    const collection = await collections.get(collectionId);
    if (collection) {
      const items = collection.content.slice();
      if (items) {
        const item = items.find(current => current.id === id);
        if (item) {
          item.data = data;
          await collections.update(collectionId, { content: items });
          dispatchEvent(ItemChangedEvent);
        }
      }
    }
  },
  addCollection: async () => {
    const collection: Collection = {
      settings: { color: "mediumseagreen" },
      content: [
        {
          id: shortid.generate(),
          name: "My collection",
          path: [],
          parentId: null,
          type: ItemType.Collection,
          data: null,
          collapsed: false
        }
      ]
    };
    await collections.add(collection);
    dispatchEvent(CollectionChangedEvent);
  },
  deleteCollection: async (collectionId: any) => {
    return collections.delete(collectionId);
  },
  loadSettings: async (): Promise<JournalSettings> => {
    const records = await settings.toArray();
    return records[0];
  },
  updateSettings: async (_settings: JournalSettings) => {
    return settings.update(_settings.id, _settings);
  },
  loadTags: (): Promise<Tag[]> => {
    return tags.toArray();
  },
  addTag: () => {
    return tags.add({
      name: "My tag",
      color: "mediumseagreen"
    } as Tag);
  },
  deleteTag: (tag: Tag) => {
    return tags.delete(tag.id);
  },
  updateTag: (tag: Tag) => {
    return tags.update(tag.id, tag);
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
  }
};
