import { Item } from "./Item";
import { Page } from "./Page";
export interface Folder extends Item {
}
export declare const createNewFolder: (parentId: string) => Page;
