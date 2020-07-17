import { useEffect, useState, useRef, useCallback } from "react";
import { Element } from "@mpkelly/react-editor-kit";
import { NodeId } from "@mpkelly/react-tree";
import useBoolean from "react-hanger/useBoolean";
import { EditorPageProps } from "../editor-page/EditorPage";
import { useDatabase } from "../database/DatabaseState";

export const useEditorState = (props: EditorPageProps) => {
  const { file } = props;
  const db = useDatabase();
  const saved = useBoolean(true);
  const [value, setValue] = useState<Element[]>();
  const locked = useBoolean(false);
  const showPdfPrintDialog = useBoolean(false);
  const lastSave = useRef<Element[]>();
  const createDefault = props.defaultValue || defaultValue;
  const saveTimeout = useRef<any>();

  useEffect(() => {
    const value = file.data || createDefault();
    setValue(value);
    locked.setValue(!!file.locked);
    lastSave.current = value;
  }, [file.id]);

  const handleToggleLocked = useCallback(() => {
    locked.toggle();
    db.updateFile(file.id, { locked: !locked });
  }, [locked]);

  const handleChange = (next: Element[]) => {
    file.data = next;
    setValue(next);
    console.log(JSON.stringify(next));
    if (JSON.stringify(next) !== JSON.stringify(value)) {
      saved.setValue(false);
      debouncedSave(file.id, next);
    }
  };

  const handleSave = (fileId: NodeId, value: Element[]) => {
    db.updateFile(fileId, { data: value }).then(() => {
      saved.setValue(true);
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
    showPdfPrintDialog,
  };
};

const defaultValue = (): Element[] => [
  { type: "paragraph", children: [{ text: "" }] },
];
