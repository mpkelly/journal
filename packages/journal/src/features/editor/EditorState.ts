import { useEffect, useState, useRef, useCallback } from "react";
import { Element } from "@mpkelly/react-editor-kit";
import { EditorPageProps } from "../editor-page/EditorPage";
import { useDatabase } from "../database/DatabaseState";
import { NodeId } from "../../components/tree-kit/Node";

export const useEditorState = (props: EditorPageProps) => {
  const { file } = props;
  const db = useDatabase();
  const [saved, setSaved] = useState(true);
  const [value, setValue] = useState<Element[]>();
  const [locked, setLocked] = useState<boolean>();
  const lastSave = useRef<Element[]>();
  const createDefault = props.defaultValue || defaultValue;
  const saveTimeout = useRef<any>();

  useEffect(() => {
    const value = file.data || createDefault();
    setValue(value);
    setLocked(file.locked);
    lastSave.current = value;
  }, [file.id]);

  const handleToggleLocked = useCallback(() => {
    setLocked((locked) => !locked);
    db.updateFile(file.id, { locked: !locked }).then(console.log);
  }, [locked]);

  const handleChange = (next: Element[]) => {
    file.data = next;
    setValue(next);
    if (JSON.stringify(next) !== JSON.stringify(value)) {
      setSaved(false);
      debouncedSave(file.id, next);
    }
  };

  const handleSave = (fileId: NodeId, value: Element[]) => {
    db.updateFile(fileId, { data: value }).then(() => {
      setSaved(true);
      // Remember the last valid value which can be reinstated as part
      // of a rollback
      lastSave.current = value;
    });
  };

  const instantSave = useCallback(() => {
    try {
      handleSave(file.id, value as Element[]);
    } catch (Error) {
      console.error("Error saving value", value);
      handleRestorePreviousValue();
    }
  }, [value]);

  const handleRestorePreviousValue = () => {
    if (lastSave.current) {
      handleSave(file.id, lastSave.current);
    }
  };

  const debouncedSave = (id: any, value: Element[]) => {
    clearTimeout(saveTimeout.current);
    saveTimeout.current = setTimeout(() => handleSave(id, value), 3000);
  };

  return {
    file,
    saved,
    value: value || createDefault(),
    instantSave,
    handleToggleLocked,
    handleChange,
    readOnly: locked,
    handleRestorePreviousValue,
  };
};

const defaultValue = (): Element[] => [
  { type: "paragraph", children: [{ text: "" }] },
];
