import db from "../database/Dexie";
import Dexie from "dexie";

const media = db.table<Media, any>("media");

export interface MediaDatabase {
  add(media: Media): Promise<void>;
  update(media: Media): Promise<number>;
  delete(id: number): Promise<void>;
  loadMedia(type?: MediaType, tagIds?: number[]): Promise<Media[]>;
}

export const useMediaDatabase = () => {
  return IndexDBMediaDatabase;
};

export const IndexDBMediaDatabase: MediaDatabase = {
  loadMedia: (type?: MediaType, tagIds?: number[]) => {
    let result: Dexie.Table<Media, any> | Dexie.Collection<Media, any> = media;
    if (type) {
      result = media.where("type").equals(type as string);
    }
    if (tagIds) {
      result.filter(media => {
        for (let tag of media.tags) {
          if (tagIds.includes(tag)) {
            return true;
          }
        }
        return false;
      });
    }
    return result.toArray();
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
