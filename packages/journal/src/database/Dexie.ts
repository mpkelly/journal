import Dexie from "dexie";

const db = new Dexie("JournalDB");

db.version(1).stores({
  collections: "++id, name",
  media: "++id, name, time, type",
  settings: "id",
  tags: "++id",
  items: "++id",
});
db.open();

export default db;
