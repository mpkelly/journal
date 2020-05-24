import { useState, useEffect, useCallback } from "react";
import { useDatabase } from "../database/DatabaseState";
import { newId } from "../../util/Identity";
import { createCollectionFile, File } from "../file/File";
import { useEventListener } from "../../util/events/Events";

let count = 1;

export const useCollectionsTreeState = () => {
  const [collections, setCollections] = useState<File[]>([]);
  const db = useDatabase();

  const updateCollectionItem = useCallback(
    (event: CustomEvent) => {
      const { id, ...rest } = event.detail;
      const next = collections.slice();
      let index = next.findIndex((item) => item.id == id);
      if (index > -1) {
        next[index] = { ...next[index], ...rest };
      }
      setCollections(next);
    },
    [collections]
  );

  const loadCollections = () => {
    return db.getCollections().then(setCollections);
  };

  useEventListener(updateCollectionItem, "itemchanged");
  useEventListener(loadCollections, "collectionschanged");

  const addCollection = useCallback(() => {
    const id = newId();
    //TODO name should come form I18NBundle
    const name = `New collection ${count++}`;
    const item = createCollectionFile(id, name);
    db.addFile(item).then(() => {
      setCollections((collections) => collections.concat([item]));
    });
  }, [collections]);

  const updateFile = async (item: File) => {
    //TODO optimise
    await db.updateFile(item.id, item).then(loadCollections);
  };

  useEffect(() => {
    loadCollections();
  }, []);

  return {
    collections,
    addCollection,
    updateFile,
  };
};
