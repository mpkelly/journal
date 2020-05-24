import { File as JFile } from "../file/File";
import { JournalSettings } from "../settings/JournalSettings";
import { Tag } from "../tags/Tag";
import { CodeFile } from "../code-editor/CodeFile";

export interface Database {
  getCollections(): Promise<JFile[]>;

  getFile(id: any): Promise<JFile | undefined>;
  addFile(item: JFile): Promise<void>;
  deleteFiles(ids: string[]): Promise<void>;
  updateFile(id: any, changes: Partial<JFile>): Promise<number>;

  getCode(id: any): Promise<CodeFile | undefined>;
  getAllCodes(ids: any[]): Promise<CodeFile[]>;
  addCode(code: CodeFile): Promise<void>;
  deleteCode(id: any): Promise<void>;
  updateCode(id: any, changes: Partial<CodeFile>): Promise<number>;

  getChildren(
    id: string,
    page: number,
    pageSize: number
  ): Promise<PagedResult<JFile>>;

  getSettings(): Promise<JournalSettings>;
  updateSettings(settings: JournalSettings): Promise<number>;

  getTags(): Promise<Tag[]>;
  addTag(): Promise<void>;
  deleteTag(tag: Tag): Promise<void>;
  updateTag(tag: Tag): Promise<number>;

  transact(work: UnitOfDBWork, tables: string[]): Promise<void>;

  exportDb(): Promise<Blob>;
  importDb(file: File): Promise<void>;

  delete(): Promise<void>;
}

export type UnitOfDBWork = () => Promise<void>;

export type PagedResult<T> = {
  count: number;
  pageSize: number;
  page: number;
  items: T[];
};

export const emptyPagedResult = () => ({
  count: 0,
  pageSize: 0,
  page: 0,
  items: [],
});
