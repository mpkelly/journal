import { FlatNode } from "../../components/tree-kit/Node";

export interface File extends FlatNode {
  name: string;
  type: FileType;
  data?: any;
  locked?: boolean;
  template?: boolean;
  linkedCode?: string[];
}

export enum FileType {
  Document,
  Folder,
  Collection,
  WikiPage,
}

export const createCollectionFile = (id: string, name: string) => {
  return createFile(id, name, FileType.Collection);
};

export const createFile = (
  id: string,
  name: string,
  type: FileType,
  expanded = true,
  parentId?: any
): File => {
  return { id, name, type, expanded, parentId, data: contentForType(type) };
};

const contentForType = (type: FileType) => {
  switch (type) {
    case FileType.Document:
      return [{ type: "paragraph", children: [{ text: "" }] }];
    case FileType.WikiPage:
      return [{ type: "fixed-title", children: [{ text: "" }] }];
    default:
      return null;
  }
};
