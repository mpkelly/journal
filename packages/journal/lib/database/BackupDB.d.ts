/**
 * Export all data from an IndexedDB database
 *
 * @param {IDBDatabase} db The database to export from
 * @return {Promise<string>}
 */
export declare function exportToJson(db: IDBDatabase): Promise<string>;
export declare function importFromJsonFile(db: IDBDatabase, file: File, clear: boolean): Promise<void>;
/**
 * Import data from JSON into an IndexedDB database.
 * This does not delete any existing data from the database, so keys may clash.
 *
 * @param {IDBDatabase} db Database to import into
 * @param {string}      json        Data to import, one key per object store
 * @return {Promise<void>}
 */
export declare function importFromJson(db: IDBDatabase, json: string): Promise<void>;
/**
 * Clear a database
 *
 * @param {IDBDatabase} db The database to delete all data from
 * @return {Promise<void>}
 */
export declare function clearDatabase(db: IDBDatabase): Promise<unknown>;
