import db from "../database/Dexie";
import Dexie from "dexie";
import { PagedResult } from "../database/Database";
import { Media, MediaType } from "./Media";

const media = db.table<Media, any>("media");

export interface MediaDatabase {
  add(media: Media): Promise<void>;
  update(media: Media): Promise<number>;
  delete(id: number): Promise<void>;
  loadMedia(
    type: MediaType,
    tagIdss: number[],
    pageNumber: number,
    pageSize: number
  ): Promise<PagedResult<Media>>;
}

export const useMediaDatabase = () => {
  return IndexDBMediaDatabase;
};

export const IndexDBMediaDatabase: MediaDatabase = {
  loadMedia: async (
    type: MediaType,
    tagIds: number[],
    page: number,
    pageSize: number
  ) => {
    let result: Dexie.Table<Media, any> | Dexie.Collection<Media, any> = media;
    result = media.where("type").equals(type as string);
    if (tagIds.length) {
      result.filter((media) => {
        for (let tag of media.tags) {
          if (tagIds.includes(tag)) {
            return true;
          }
        }
        return false;
      });
    }
    const count = await result.count();
    const items = await result
      .offset(page * pageSize)
      .limit(pageSize)
      .reverse()
      .toArray();
    return { items, count, page, pageSize };
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
