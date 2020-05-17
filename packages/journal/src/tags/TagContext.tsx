import React, { useEffect } from "react";
import { createContext, useContext, useState } from "react";
import { Tag } from "./Tag";
import { Media, useMediaDatabase } from "../media/MediaDatabase";
import { useDatabase } from "../database/Databases";

export interface TagContextValue {
  tags: Tag[];
  addTag(): void;
  deleteTag(tag: Tag): void;
  updateTag(tag: Tag): void;
  toggleTag(media: Media, tagId?: number): Promise<Media>;
  selected: number[];
  toggleSelected(tagId: number): void;
}

const Context = createContext<TagContextValue>({} as TagContextValue);

export const useTags = () => {
  return useContext(Context);
};

export interface TaggerProviderProps {
  children: any;
}

export const TagProvider = (props: TaggerProviderProps) => {
  const db = useDatabase();
  const mediaDb = useMediaDatabase();
  const [tags, setTags] = useState<Tag[]>([]);
  const [selected, setSelected] = useState<number[]>([]);

  const toggleTag = async (media: Media, tagId: number) => {
    const tags = (media.tags || []).slice();
    if (tags.includes(tagId)) {
      tags.splice(tags.indexOf(tagId), 1);
    } else {
      tags.push(tagId);
    }
    media.tags = tags;
    await mediaDb.update(media);
    return Promise.resolve({ ...media });
  };

  const toggleSelected = (tagId: number) => {
    const next = selected.slice();
    if (next.includes(tagId)) {
      next.splice(next.indexOf(tagId), 1);
    } else {
      next.push(tagId);
    }
    setSelected(next);
  };

  useEffect(() => {
    loadTags();
  }, []);

  const loadTags = () => {
    db.getTags().then(setTags);
  };

  const addTag = () => {
    db.addTag().then(loadTags);
  };

  const deleteTag = (tag: Tag) => {
    db.deleteTag(tag).then(loadTags);
  };

  const updateTag = (tag: Tag) => {
    db.updateTag(tag).then(loadTags);
  };

  const context = {
    tags,
    addTag,
    deleteTag,
    updateTag,
    toggleTag,
    selected,
    toggleSelected,
  };

  return <Context.Provider value={context}>{props.children}</Context.Provider>;
};
