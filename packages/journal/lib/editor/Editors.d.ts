import { Node } from "@mpkelly/react-editor-kit";
import { EditorPageProps } from "./EditorPage";
import { Item } from "../content/Item";
export declare const useEditor: (
  props: EditorPageProps
) => {
  itemId: string;
  collectionId: string;
  item: Item;
  saved: boolean;
  value: Node[];
  instantSave: () => void;
  handleToggleLocked: () => void;
  handleItemChange: (next: Node[]) => void;
  readOnly: boolean;
  handleRestorePreviousValue: () => void;
};
