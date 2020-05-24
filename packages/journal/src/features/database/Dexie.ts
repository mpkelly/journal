import Dexie from "dexie";

const db = new Dexie("JournalDB");

db.version(2).stores({
  media: "++id, name, time, type",
  settings: "id",
  tags: "++id",
  files: "++id, parentId",
  code: "id",
});
db.open();

export default db;
