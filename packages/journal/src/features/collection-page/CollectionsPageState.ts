import constate from "constate";
import { useCollectionsTreeState as collectionsTreeState } from "../collections-tree/CollectionsTreeState";

export const [CollectionsTreeStateProvider, useCollectionsTreeState] = constate(
  collectionsTreeState
);
