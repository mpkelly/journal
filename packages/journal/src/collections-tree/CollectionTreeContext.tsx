import React, {
  createContext,
  useState,
  useEffect,
  useContext,
  useCallback,
} from "react";
import { useDatabase } from "../database/Databases";
import {
  CollectionsData,
  createEmptyCollections,
  createNewCollectionItem,
} from "./CollectionsData";
import { newId } from "../util/Identity";
import { createCollectionItem, ItemType } from "../content/ItemData";
import { useEventListener } from "../events/Events";

export interface CollectionTreeContextValue {
  collections: CollectionsData;
  addCollection(): void;
  updateCollections(collections: CollectionsData): Promise<void>;
}

const defaultValue = ({} as unknown) as CollectionTreeContextValue;
const Context = createContext<CollectionTreeContextValue>(defaultValue);

export interface CollectionsTreeProviderProps {
  children: JSX.Element;
}

export const useCollectionsTree = () => {
  return useContext(Context);
};

let count = 1;

export const CollectionsTreeProvider = (
  props: CollectionsTreeProviderProps
) => {
  const { children } = props;
  const [collections, setCollections] = useState<CollectionsData>();
  const db = useDatabase();

  const updateCollectionItem = useCallback(
    (event: CustomEvent) => {
      const { id, ...rest } = event.detail;
      if (collections) {
        const next = { ...collections };
        let index = next.items.findIndex((item) => item.id == id);
        if (index > -1) {
          next.items[index] = { ...next.items[index], ...rest };
        }
        setCollections(next);
      }
    },
    [collections]
  );

  useEventListener(updateCollectionItem, "itemchanged");

  const loadCollections = () => {
    return db.getCollections().then((collections) => {
      if (!collections) {
        collections = createEmptyCollections();
      }
      setCollections(collections);
    });
  };

  const addCollection = useCallback(() => {
    if (collections) {
      let next: CollectionsData = { ...collections };
      const id = newId();
      //TODO name should come form I18NBundle
      const name = `New collection ${count++}`;
      next.items.push(createNewCollectionItem(id, name, ItemType.Collection));
      next.root.children.push(id);
      next.root.hasChildren = next.root.isExpanded = true;

      const item = createCollectionItem(id, name);

      db.transact(async () => {
        db.addItem(item);
        updateCollections(next);
        return;
      }, ["items", "collections"]);
    }
  }, [collections]);

  const updateCollections = (collections: CollectionsData) => {
    return db
      .updateCollections(collections)
      .then(() => setCollections(collections));
  };

  useEffect(() => {
    loadCollections();
  }, []);

  if (!collections) {
    return null;
  }

  const context = {
    collections,
    addCollection,
    updateCollections,
  };

  return <Context.Provider value={context}>{children}</Context.Provider>;
};
