import { useState, useEffect, useCallback } from "react";
import constate from "constate/";
import useArray from "react-hanger/array/useArray";
import { useDatabase } from "../database/DatabaseState";
import { NodeId } from "../../components/tree-kit/Node";
import { CodeFile } from "../code-editor/CodeFile";

export const codePageState = () => {
  const [itemToDelete, setItemToDelete] = useState<NodeId>();
  const [codeFiles, codeFileActions] = useArray<CodeFile>([]);
  const [activeCodeFile, setActiveCodeFile] = useState<CodeFile>();

  const db = useDatabase();

  useEffect(() => {
    db.getAllCodeFiles().then(codeFileActions.setValue);
  }, []);

  const updateFile = (codeFile: CodeFile) => {
    db.updateCodeFile(codeFile?.id, codeFile).then(() => {
      codeFileActions.modifyById(codeFile.id, codeFile);
    });
    return codeFile;
  };

  const handleChange = useCallback(
    (change: Partial<CodeFile>) => {
      if (activeCodeFile) {
        const next = { ...activeCodeFile, ...change };
        setActiveCodeFile(next);
        updateFile(next);
      }
    },
    [activeCodeFile]
  );

  const handleToggleGlobal = useCallback(
    (codeFile: CodeFile) => {
      updateFile({ ...codeFile, global: !codeFile.global });
    },
    [activeCodeFile]
  );

  const handleConfirmDelete = useCallback(() => {
    db.deleteCodeFile(itemToDelete)
      .then(() => codeFileActions.removeById(itemToDelete))
      .then(handleCancelDelete);
  }, [itemToDelete]);

  const handleCancelDelete = () => setItemToDelete(undefined);

  return {
    codeFiles,
    activeCodeFile,
    itemToDelete,
    handleEdit: setActiveCodeFile,
    handleChange,
    handleDeleteFile: setItemToDelete,
    handleConfirmDelete,
    handleCancelDelete,
    handleToggleGlobal,
  };
};

export const [CodePageStateProvider, useCodePageState] = constate(
  codePageState
);
