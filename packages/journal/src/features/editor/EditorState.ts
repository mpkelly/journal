import { useEffect, useState, useRef, useCallback } from "react";
import { Element } from "@mpkelly/react-editor-kit";
import { EditorPageProps } from "../editor-page/EditorPage";
import { useDatabase } from "../database/DatabaseState";
import { debounce } from "../../util/Debounce";
import { NodeId } from "../../components/tree-kit/Node";

export const useEditorState = (props: EditorPageProps) => {
  const { file } = props;
  const db = useDatabase();
  const [saved, setSaved] = useState(true);
  const [value, setValue] = useState<Element[]>();
  const [locked, setLocked] = useState<boolean>();
  const lastSave = useRef<Element[]>();
  const createDefault = props.defaultValue || defaultValue;

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

  const handleItemChange = (next: Element[]) => {
    file.data = next;
    setValue(next);
    if (JSON.stringify(next) !== JSON.stringify(value)) {
      setSaved(false);
      debouncedSave(file.id, next);
    }
  };

  const handleSave = (fileId: NodeId, value: any) => {
    db.updateFile(fileId, { data: value }).then(() => {
      setSaved(true);
      // Remember the last valid value which can be reinstated as part
      // of a rollback
      lastSave.current = value;
    });
  };

  const instantSave = useCallback(() => {
    try {
      handleSave(file.id, value);
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

  const debouncedSave = debounce(handleSave, 3000);
  return {
    file,
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
