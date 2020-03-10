import { useEffect, useState, useRef } from "react";
import { Node } from "slate";
import { EditorPageProps } from "./EditorPage";
import { useDatabase } from "../database/Databases";
import { Item } from "../content/Item";
import { debounce } from "../util/Debounce";

export const useEditor = (props: EditorPageProps) => {
  const { match } = props;
  const { params } = match;
  const db = useDatabase();
  const [saved, setSaved] = useState(true);
  const [item, setItem] = useState<Item | undefined>(undefined);
  const [value, setValue] = useState<any>(defaultValue());
  const loaded = useRef(false);

  const collectionId = params.collectionId;
  const itemId = params.itemId;

  const loadItem = () => {
    loaded.current = false;
    db.getItem(Number(params.collectionId), params.itemId).then(item => {
      if (item) {
        if (item.data) {
          setValue(item.data);
        } else {
          setValue(defaultValue());
        }
        setItem(item);
      }
      loaded.current = true;
    });
  };

  useEffect(loadItem, [params.collectionId, params.itemId]);

  const handleToggleLocked = () => {
    setItem(item => {
      const next = { ...item } as Item;
      next.locked = !next.locked;
      db.updateItem(Number(params.collectionId), next.id, {
        locked: next.locked
      });
      return next;
    });
  };

  const handleItemChange = (next: Node[]) => {
    if (loaded.current) {
      setValue(next);
      if (JSON.stringify(next) !== JSON.stringify(value)) {
        setSaved(false);
        if (loaded.current) {
          debouncedSave(Number(params.collectionId), params.itemId, next);
        }
      }
    }
  };

  const handleSave = (collectionId: number, itemId: string, value: any) => {
    db.updateItemData(collectionId, itemId, value).then(() => {
      setSaved(true);
    });
  };

  const instantSave = () => {
    handleSave(Number(params.collectionId), params.itemId, value);
  };

  const debouncedSave = debounce(handleSave, 3000);
  const readOnly = item && item.locked;
  return {
    itemId,
    collectionId,
    item,
    saved,
    value,
    instantSave,
    handleToggleLocked,
    handleItemChange,
    readOnly
  };
};

const defaultValue = () => [{ type: "paragraph", children: [{ text: "" }] }];
