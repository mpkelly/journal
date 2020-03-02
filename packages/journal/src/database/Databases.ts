import { Database } from "./Database";
import { IndexDBDatabase } from "./IndexDBDatabase";

export const useDatabase = (): Database => {
  return IndexDBDatabase;
};
