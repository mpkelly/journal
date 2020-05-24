import { FlatNode } from "../../components/tree-kit/Node";

export interface File extends FlatNode {
  name: string;
  type: FileType;
  data?: any;
  locked?: boolean;
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
  return { id, name, type, expanded, parentId };
};
