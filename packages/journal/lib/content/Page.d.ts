import { Item } from "./Item";
export interface Page extends Item {
}
export declare const createNewPage: (parentId: string) => Page;
