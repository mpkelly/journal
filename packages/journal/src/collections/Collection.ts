import { Item } from "../content/Item";

export interface Collection {
  id?: number;
  settings: any;
  content: Item[];
}
