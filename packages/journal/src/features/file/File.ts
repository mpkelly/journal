import { FlatNode } from "../../components/tree-kit/Node";

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
  const now = fileDate();
  let modified = now;
  let created = now;
  return {
    id,
    name,
    type,
    expanded,
    parentId,
    data: contentForType(type),
    created,
    modified,
  };
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

export const fileDate = () => new Date().toLocaleString();
