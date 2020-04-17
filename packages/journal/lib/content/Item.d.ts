export interface Item {
    id?: any;
    name: string;
    path: number[];
    parentId: string | null;
    type: ItemType;
    collapsed?: boolean;
    data?: any;
    locked?: boolean;
}
export declare enum ItemType {
    Page = 0,
    Folder = 1,
    Collection = 2
}
