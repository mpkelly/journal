import db from "./Dexie";
import * as DexieBackup from "dexie-export-import";
import { Database, UnitOfDBWork } from "./Database";
import { File as JFile, FileType } from "../file/File";
import { JournalSettings, DefaultSettings } from "../settings/JournalSettings";
import { newId } from "../../util/Identity";
import { CodeFile } from "../code-editor/CodeFile";
import { Variable } from "../variables/Variable";

const files = db.table<JFile, any>("files");
const settings = db.table<JournalSettings, any>("settings");
const code = db.table<CodeFile, any>("code");
const variables = db.table<Variable, any>("variables");

const ensureSettings = async () => {
  const records = await settings.toArray();
  if (records.length == 0) {
    await settings.add(DefaultSettings);
  }
};
ensureSettings();

export const JournalDatabase: Database = {
  getCollections: async () => {
    const results: JFile[] = [];
    await files.each((item) => {
      if (!item.template) {
        const { data, ...rest } = item;
        if (item.type == FileType.Collection || item.type == FileType.Folder) {
          rest.accepts = [
            FileType.Folder,
            FileType.Document,
            FileType.WikiPage,
          ];
        } else {
          rest.accepts = [];
        }
        results.push(rest);
      }
    });
    return results;
  },
  incrementCount: (id: any) => {
    return Promise.resolve(1);
  },
  addVariable: (variable: Variable) => {
    return variables.add(variable, variable.id);
  },
  updateVariable: (id: any, changes: Partial<Variable>) => {
    return variables.update(id, changes);
  },
  deleteVariable: (id: string) => {
    return variables.delete(id);
  },

  getFile: async (id: string): Promise<JFile | undefined> => {
    return await files.get(id);
  },

  deleteFiles: async (ids: string[]): Promise<void> => {
    return await files.bulkDelete(ids);
  },

  addFile: async (file: JFile): Promise<void> => {
    if (!file.id) {
      file.id = newId();
    }
    file.locked = false;
    return files.add(file, file.id);
  },

  getTemplates: async () => {
    return await files.filter((file) => Boolean(file.template)).toArray();
  },

  updateFile: async (id: string, changes: Partial<JFile>): Promise<number> => {
    return files.update(id, changes);
  },

  getCodeFile: async (id: string): Promise<CodeFile | undefined> => {
    return await code.get(id);
  },
  getAllCodeFiles: async (ids?: string[], includeGlobal = true) => {
    if (!ids) {
      return code.toArray();
    }
    const files = await code.bulkGet(ids);
    if (!includeGlobal) {
      return files;
    }
    const global = await code
      .filter((code) => Boolean(code.global) && !files.includes(code.id))
      .toArray();
    return Promise.resolve(global.concat(files));
  },
  deleteCodeFile: async (id: string): Promise<void> => {
    files
      .filter((file) => {
        if (file.linkedCode) {
          return file.linkedCode.includes(id);
        }
        return false;
      })
      .modify((file) => {
        if (file.linkedCode) {
          file.linkedCode.splice(file.linkedCode.indexOf(id), 1);
        }
      });
    return await code.delete(id);
  },

  addCodeFile: async (item: CodeFile): Promise<void> => {
    if (!item.id) {
      item.id = newId();
    }
    return code.add(item, item.id);
  },

  updateCodeFile: async (
    id: string,
    changes: Partial<CodeFile>
  ): Promise<number> => {
    return code.update(id, changes);
  },

  getChildren: async (fileId: string, page: number, pageSize: number) => {
    let results: JFile[] = [];
    let count = 0;
    // TODO look at optimising this. It shoudln't be an issue for listing
    // files and folders but could be for images later.
    // See https://github.com/dfahlander/Dexie.js/issues/838
    count = await files
      .where("parentId")
      .equals(fileId)
      .filter((item) => !item.template)
      .count();
    results = await files
      .where("parentId")
      .equals(fileId)
      .filter((item) => !item.template)
      .reverse()
      .offset(page * pageSize)
      .limit(pageSize)
      .toArray();

    return { items: results, count, page, pageSize };
  },
  getSettings: async (): Promise<JournalSettings> => {
    const records = await settings.toArray();
    return records[0];
  },

  updateSettings: async (updated: JournalSettings) => {
    return settings.update(updated.id, updated);
  },

  transact: (work: UnitOfDBWork, tables: string[]) => {
    return db.transaction("rw", tables, work);
  },

  exportDb: async () => {
    return await DexieBackup.exportDB(db);
  },
  importDb: async (file: File) => {
    await db.delete();
    return DexieBackup.importDB(file);
  },

  delete: () => {
    return db.delete();
  },
};
