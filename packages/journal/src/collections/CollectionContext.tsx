import React, { createContext, useState, useEffect, useContext } from "react";
import { convert, flatten, remove } from "react-sortly";
import { useDatabase } from "../database/Databases";
import { Collection } from "./Collection";
import { createNewPage } from "../content/Page";
import { createNewFolder } from "../content/Folder";
import { Item } from "../content/Item";
import { CollectionChangedEvent } from "../database/Database";

export interface CollectionContextValue {
  collections: Collection[];
  addPage(collectionId: any, parentId: string): Promise<any>;
  addFolder(collectionId: any, parentId: string): Promise<any>;
  renameItem(collectionId: any, id: string, name: string): Promise<any>;
  updateItems(collectionId: any, items: Item[]): Promise<any>;
  deleteItem(collectionId: any, id: any): Promise<any>;
  addCollection(): Promise<any>;
  getColor(collectionId: any): string;
  setColor(collectionId: any, color: string): Promise<any>;
}

const defaultValue = ({} as unknown) as CollectionContextValue;
const Context = createContext<CollectionContextValue>(defaultValue);

export interface CollectionsProviderProps {
  children: any;
}

export const useCollections = () => {
  return useContext(Context);
};

export const CollectionsProvider = (props: CollectionsProviderProps) => {
  const { children } = props;
  const [collections, setCollections] = useState<Collection[]>([]);
  const db = useDatabase();

  const loadCollections = () => {
    return db.loadCollections().then(collections => {
      setCollections(collections.slice());
    });
  };

  const addPage = async (collectionId: any, parentId: string) => {
    await db.addItem(collectionId, createNewPage(parentId));
    return loadCollections();
  };

  const addFolder = async (collectionId: any, parentId: string) => {
    await db.addItem(collectionId, createNewFolder(parentId));
    return loadCollections();
  };

  const renameItem = async (collectionId: any, id: string, name: string) => {
    await db.renameItem(collectionId, id, name);
    return loadCollections();
  };

  const updateItems = async (collectionId: any, items: Item[]) => {
    await db.updateItems(collectionId, items);
    return loadCollections();
  };

  const addCollection = async () => {
    await db.addCollection();
    return loadCollections();
  };

  const getColor = (collectionId: any) => {
    const collection = collections.find(
      collection => collection.id === collectionId
    );
    if (collection) {
      return collection.settings.color;
    }
    return undefined;
  };

  const deleteItem = async (collectionId: any, id: any) => {
    const collection = collections.find(
      collection => collection.id == collectionId
    );
    if (collection) {
      if (collection.id === id) {
        await db.deleteCollection(id);
        return loadCollections();
      } else {
        const converted = convert(collection.content);
        const result = remove(
          converted,
          converted.findIndex((item: Item) => item.id == id)
        );
        return updateItems(collectionId, flatten(result));
      }
    }
  };

  const setColor = async (collectionId: any, color: string) => {
    const collection = collections.find(
      collection => collection.id == collectionId
    );
    if (collection) {
      collection.settings.color = color;
      await db.updateCollection(collection);
      return loadCollections();
    }
  };

  useEffect(() => {
    loadCollections();
  }, []);

  const context = {
    collections,
    addPage,
    addFolder,
    renameItem,
    updateItems,
    deleteItem,
    addCollection,
    getColor,
    setColor
  };

  return <Context.Provider value={context}>{children}</Context.Provider>;
};
