import { Database } from "./Database";
import { JournalDatabase } from "./JournalDatabase";

export const useDatabase = (): Database => {
  return JournalDatabase;
};
