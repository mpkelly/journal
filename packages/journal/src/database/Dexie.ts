import Dexie from "dexie";

const db = new Dexie("SiamWikiDatabase");

db.version(1).stores({
  collections: "++id, name",
  media: "++id, name, time, type",
  settings: "id",
  tags: "++id"
});
db.open();

export default db;
