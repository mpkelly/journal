// BASED ON THIS: https://gist.github.com/loilo/ed43739361ec718129a15ae5d531095b
// Just a short-term solution until the Dexie package, which supports streaming, is functional.

/**
 * Export all data from an IndexedDB database
 *
 * @param {IDBDatabase} db The database to export from
 * @return {Promise<string>}
 */
export function exportToJson(db: IDBDatabase): Promise<string> {
  return new Promise((resolve, reject) => {
    const exportObject: any = {};
    if (db.objectStoreNames.length === 0) {
      resolve(JSON.stringify(exportObject));
    } else {
      const transaction = db.transaction(
        db.objectStoreNames as any,
        "readonly"
      );

      transaction.addEventListener("error", reject);

      for (const storeName of Array.from(db.objectStoreNames)) {
        const allObjects: any = [];
        transaction
          .objectStore(storeName)
          .openCursor()
          .addEventListener("success", (event: any) => {
            const cursor = event.target.result;
            if (cursor) {
              // Cursor holds value, put it into store data
              allObjects.push(cursor.value);
              cursor.continue();
            } else {
              // No more values, store is done
              exportObject[storeName] = allObjects;

              // Last store was handled
              if (
                db.objectStoreNames.length === Object.keys(exportObject).length
              ) {
                resolve(JSON.stringify(exportObject));
              }
            }
          });
      }
    }
  });
}

export async function importFromJsonFile(
  db: IDBDatabase,
  file: File,
  clear: boolean
): Promise<void> {
  const json = await readFile(file);
  if (clear) {
    await clearDatabase(db);
  }
  return importFromJson(db, json);
}

function readFile(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    var reader = new FileReader();
    reader.onload = () => {
      resolve(reader.result as string);
    };
    reader.readAsText(file);
  });
}

/**
 * Import data from JSON into an IndexedDB database.
 * This does not delete any existing data from the database, so keys may clash.
 *
 * @param {IDBDatabase} db Database to import into
 * @param {string}      json        Data to import, one key per object store
 * @return {Promise<void>}
 */
export function importFromJson(db: IDBDatabase, json: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(db.objectStoreNames as any, "readwrite");
    transaction.addEventListener("error", reject);

    var importObject = JSON.parse(json);
    for (const storeName of Array.from(db.objectStoreNames)) {
      let count = 0;
      for (const toAdd of importObject[storeName]) {
        const request = transaction.objectStore(storeName).add(toAdd);
        request.addEventListener("success", () => {
          count++;
          if (count === importObject[storeName].length) {
            // Added all objects for this store
            delete importObject[storeName];
            if (Object.keys(importObject).length === 0) {
              // Added all object stores
              resolve();
            }
          }
        });
      }
    }
  });
}

/**
 * Clear a database
 *
 * @param {IDBDatabase} db The database to delete all data from
 * @return {Promise<void>}
 */
export function clearDatabase(db: IDBDatabase) {
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(db.objectStoreNames as any, "readwrite");
    transaction.addEventListener("error", reject);

    let count = 0;
    for (const storeName of Array.from(db.objectStoreNames)) {
      transaction
        .objectStore(storeName)
        .clear()
        .addEventListener("success", () => {
          count++;
          if (count === db.objectStoreNames.length) {
            // Cleared all object stores
            resolve();
          }
        });
    }
  });
}
