import { FlatNode } from "@mpkelly/react-tree";
export interface File extends FlatNode {
    name: string;
    type: FileType;
    data?: any;
    locked?: boolean;
    template?: boolean;
    created: string;
    modified: string;
    linkedCode?: string[];
}
export declare enum FileType {
    Document = 0,
    Folder = 1,
    Collection = 2,
    WikiPage = 3
}
export declare const createCollectionFile: (id: string, name: string) => File;
export declare const createFile: (id: string, name: string, type: FileType, expanded?: boolean, parentId?: any) => File;
export declare const fileDate: () => string;
