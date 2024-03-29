import { useState, useEffect, useCallback } from "react";
import { useDatabase } from "../database/DatabaseState";
import { newId } from "../../util/Identity";
import { createCollectionFile, File } from "../file/File";
import { useEventListener } from "../../util/events/Events";
import { useHistory } from "react-router-dom";

let count = 1;

export const useCollectionsTreeState = () => {
  const [collections, setCollections] = useState<File[]>([]);
  const db = useDatabase();
  const history = useHistory();

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
      history.push(`/library/view/${id}`);
    });
  }, [collections]);

  const updateFiles = async (
    files: File[],
    property: keyof File,
    value: any
  ) => {
    db.transact(() => {
      return Promise.all(
        files.map((file) => {
          const next = { ...file, [property]: value };
          db.updateFile(file.id, next);
        })
      );
    }, ["files"]).then(loadCollections);
  };

  useEffect(() => {
    loadCollections();
  }, []);

  return {
    collections,
    addCollection,
    updateFiles,
  };
};
