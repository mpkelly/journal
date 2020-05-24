import db from "../database/Dexie";
import Dexie from "dexie";

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
  ): Promise<{ total: number; items: Media[] }>;
}

export const useMediaDatabase = () => {
  return IndexDBMediaDatabase;
};

export const IndexDBMediaDatabase: MediaDatabase = {
  loadMedia: async (
    type: MediaType,
    tagIds: number[],
    pageNumber: number,
    pageSize: number
  ) => {
    let result: Dexie.Table<Media, any> | Dexie.Collection<Media, any> = media;
    result = media.where("type").equals(type as string);
    if (tagIds.length) {
      result.filter(media => {
        for (let tag of media.tags) {
          if (tagIds.includes(tag)) {
            return true;
          }
        }
        return false;
      });
    }
    const total = await result.count();
    const items = await result
      .offset(pageNumber * pageSize)
      .limit(pageSize)
      .toArray();
    return { total, items };
  },
  add: async (_media: Media) => {
    _media.time = _media.time || Date.now();
    return media.add(_media);
  },
  update: async (_media: Media) => {
    return media.update(_media.id, _media);
  },
  delete: async (id: number) => {
    console.log(id, typeof id === "number");
    return media.delete(id);
  }
};

export interface Media {
  id?: number;
  name: string;
  content?: string;
  source: string;
  pageSource: string;
  time?: number;
  type: MediaType;
  tags: number[];
}

export enum MediaType {
  Image = "image",
  Video = "video",
  Audio = "audio",
  Text = "text"
}
