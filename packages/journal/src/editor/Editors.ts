import { useEffect, useState, useRef, useCallback } from "react";
import { Element } from "@mpkelly/react-editor-kit";
import { EditorPageProps } from "./EditorPage";
import { useDatabase } from "../database/Databases";
import { debounce } from "../util/Debounce";

export const useEditor = (props: EditorPageProps) => {
  const { item } = props;
  const db = useDatabase();
  const [saved, setSaved] = useState(true);
  const [value, setValue] = useState<Element[]>();
  const [locked, setLocked] = useState<boolean>();
  const lastSave = useRef<Element[]>();
  const createDefault = props.defaultValue || defaultValue;

  useEffect(() => {
    const value = item.data || createDefault();
    setValue(value);
    setLocked(item.locked);
    lastSave.current = value;
  }, [item.id]);

  const handleToggleLocked = useCallback(() => {
    setLocked((locked) => !locked);
    db.updateItem(item.id, { locked: !locked }).then(console.log);
  }, [locked]);

  const handleItemChange = (next: Element[]) => {
    setValue(next);
    if (JSON.stringify(next) !== JSON.stringify(value)) {
      setSaved(false);
      debouncedSave(item.id, next);
    }
  };

  const handleSave = (itemId: string, value: any) => {
    db.updateItem(itemId, { data: value }).then(() => {
      setSaved(true);
      // Remember the last valid value which can be reinstated as part
      // of a rollback
      lastSave.current = value;
    });
  };

  const instantSave = useCallback(() => {
    try {
      handleSave(item.id, value);
    } catch (Error) {
      console.error("Error saving value", value);
      handleRestorePreviousValue();
    }
  }, [value]);

  const handleRestorePreviousValue = () => {
    if (lastSave.current) {
      handleSave(item.id, lastSave.current);
    }
  };

  const debouncedSave = debounce(handleSave, 3000);
  return {
    item,
    saved,
    value: value || createDefault(),
    instantSave,
    handleToggleLocked,
    handleItemChange,
    readOnly: locked,
    handleRestorePreviousValue,
  };
};

const defaultValue = (): Element[] => [
  { type: "paragraph", children: [{ text: "" }] },
];
