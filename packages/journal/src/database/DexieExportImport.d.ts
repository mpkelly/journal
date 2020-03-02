declare module "dexie-export-import" {
  export interface ExportProgress {
    totalTables: number;
    completedTables: number;
    totalRows: number;
    completedRows: number;
    done: boolean;
  }

  export interface ExportOptions {
    noTransaction?: boolean;
    numRowsPerChunk?: number;
    prettyJson?: boolean;
    filter?: (table: string, value: any, key?: any) => boolean;
    progressCallback?: (progress: ExportProgress) => boolean;
  }

  export interface StaticImportOptions {
    noTransaction?: boolean;
    chunkSizeBytes?: number; // Default: DEFAULT_KILOBYTES_PER_CHUNK ( 1MB )
    filter?: (table: string, value: any, key?: any) => boolean;
    progressCallback?: (progress: ImportProgress) => boolean;
  }

  export interface ImportOptions extends StaticImportOptions {
    acceptMissingTables?: boolean;
    acceptVersionDiff?: boolean;
    acceptNameDiff?: boolean;
    acceptChangedPrimaryKey?: boolean;
    overwriteValues?: boolean;
    clearTablesBeforeImport?: boolean;
    noTransaction?: boolean;
    chunkSizeBytes?: number; // Default: DEFAULT_KILOBYTES_PER_CHUNK ( 1MB )
    filter?: (table: string, value: any, key?: any) => boolean;
    progressCallback?: (progress: ImportProgress) => boolean;
  }

  export function exportDB(db: Dexie, options?: ExportOptions): Promise<Blob>;
  export function importDB(
    db: Dexie,
    blob: Blob,
    options?: ImportOptions
  ): Promise<void>;
}
