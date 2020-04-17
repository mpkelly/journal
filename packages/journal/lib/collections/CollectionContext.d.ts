import { Collection } from "./Collection";
import { Item } from "../content/Item";
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
export interface CollectionsProviderProps {
    children: any;
}
export declare const useCollections: () => CollectionContextValue;
export declare const CollectionsProvider: (props: CollectionsProviderProps) => JSX.Element;
