import { useState, useEffect } from "react";
import useArray from "react-hanger/array/useArray";
import { useDatabase } from "../database/DatabaseState";
import { CodeFile } from "../code-editor/CodeFile";

export const useEditorPageLinkCodeDialogState = (existing: string[]) => {
  const db = useDatabase();
  const [codeFiles, setCodeFiles] = useState<CodeFile[]>([]);
  const [selectedFiles, selectedFilesActions] = useArray<string>([]);
  const canSubmit = selectedFiles.length > 0;

  useEffect(() => {
    db.getAllCodeFiles().then((files) => {
      setCodeFiles(
        files.filter((file) => !file.global && !existing.includes(file.id))
      );
    });
  }, []);

  const handleToggleSelected = (id: string) => {
    const index = selectedFiles.indexOf(id);
    if (index > -1) {
      selectedFilesActions.removeIndex(index);
    } else {
      selectedFilesActions.push(id);
    }
  };

  const isSelected = (id: string) => selectedFiles.includes(id);

  return {
    codeFiles,
    selectedFiles,
    handleToggleSelected,
    isSelected,
    canSubmit,
  };
};
