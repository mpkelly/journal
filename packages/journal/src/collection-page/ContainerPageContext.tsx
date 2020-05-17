import React, { createContext, useContext, useState, useEffect } from "react";
import { useDatabase } from "../database/Databases";
import { newId } from "../util/Identity";
import { ItemType, createItem, ItemData } from "../content/ItemData";
import { createNewCollectionItem } from "../collections-tree/CollectionsData";
import { fireEvent } from "../events/Events";
import { useParams } from "react-router-dom";
import { PagedResult } from "../database/Database";

export interface ContainerPageContextContextValue {
  addItem(type: ItemType): void;
  handleNameChanged(name: string): void;
  hasNext: boolean;
  hasPrevious: boolean;
  handleNext(): void;
  handlePrevious(): void;
  items: ItemData[];
}

const defaultValue = ({} as unknown) as ContainerPageContextContextValue;
const Context = createContext<ContainerPageContextContextValue>(defaultValue);

export interface CollectionsPageProviderProps {
  children: JSX.Element;
  itemId: string;
}

export const useContainerPage = () => {
  return useContext(Context);
};

export const PageSize = 20;

let count = 1;
/**
 *
 * Works with any type of 'container' i.e. folder or collection
 */
export const ContainerPageProvider = (props: CollectionsPageProviderProps) => {
  const { children, itemId: collectionId } = props;
  const [page, setPage] = useState(0);
  const { itemId } = useParams();

  const db = useDatabase();

  useEffect(() => {
    db.getChildren(itemId, page, PageSize).then(setItems);
  }, [itemId, page]);

  const [items, setItems] = useState<PagedResult<ItemData>>();

  const hasNext = Boolean(
    items && items.page + 1 < items.count / items.pageSize
  );
  const hasPrevious = page > 0;
  const handlePrevious = () => setPage((page) => page - 1);
  const handleNext = () => setPage((page) => page + 1);

  const handleNameChanged = async (name: string) => {
    const collections = await db.getCollections();
    const next = { ...collections };
    const collectionItem = next.items.find((item) => item.id === collectionId);
    if (collectionItem) {
      collectionItem.name = name;
    }

    db.transact(async () => {
      await Promise.all([
        db.updateItem(collectionId, { name }),
        db.updateCollections(next),
      ]);
      fireEvent("itemchanged", { id: collectionId, name });
      return;
    }, ["items", "collections"]);
  };

  const addItem = async (type: ItemType) => {
    const collections = await db.getCollections();
    const next = { ...collections };
    const id = newId();
    //TODO use I18NLabels
    const name = `New item ${count++}`;

    next.items.find((item) => item.id === collectionId)?.children.push(id);
    next.root.hasChildren = next.root.isExpanded = true;

    const item = createItem(id, name, type);
    next.items.push(createNewCollectionItem(id, name, type));

    await db.transact(async () => {
      db.addItem(item);
      db.updateCollections(next);
      setPage(0);
      return;
    }, ["items", "collections"]);

    //TODO fix this
    setPage(0);
    db.getChildren(itemId, 0, PageSize).then(setItems);
  };

  const context = {
    addItem,
    handleNameChanged,
    hasNext,
    hasPrevious,
    handleNext,
    handlePrevious,
    items: items ? items.items : [],
  };

  return <Context.Provider value={context}>{children}</Context.Provider>;
};
