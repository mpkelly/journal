import db from "../database/Dexie";
import Dexie from "dexie";
import { PagedResult } from "../database/Database";
import { Media, MediaType } from "./Media";

export const media = db.table<Media, any>("media");

export interface MediaDatabase {
  add(media: Media): Promise<void>;
  update(media: Media): Promise<number>;
  delete(id: number): Promise<void>;
  loadMedia(
    type: MediaType,
    search: string,
    pageNumber: number,
    pageSize: number,
    ascending: boolean
  ): Promise<PagedResult<Media>>;
}

export const useMediaDatabase = () => {
  return IndexDBMediaDatabase;
};

export const IndexDBMediaDatabase: MediaDatabase = {
  loadMedia: async (
    type: MediaType,
    search: string,
    page: number,
    pageSize: number,
    ascending: boolean
  ) => {
    let result: Dexie.Table<Media, any> | Dexie.Collection<Media, any> = media;
    result = media.where("type").equals(type as string);
    if (search) {
      search = search.toLowerCase();
      result.filter((media) => {
        if (media.name.toLowerCase().includes(search)) {
          return true;
        }
        if (media.tags && media.tags.find((tag) => tag.includes(search))) {
          return true;
        }
        return false;
      });
    }
    const count = await result.count();
    const cursor = result.offset(page * pageSize).limit(pageSize);
    if (!ascending) {
      cursor.reverse();
    }
    const items = await cursor.toArray();
    return { items, count, page, pageSize, search };
  },
  add: async (_media: Media) => {
    _media.time = _media.time || Date.now();
    return media.add(_media);
  },
  update: async (_media: Media) => {
    return media.update(_media.id, _media);
  },
  delete: async (id: number) => {
    return media.delete(id);
  },
};
