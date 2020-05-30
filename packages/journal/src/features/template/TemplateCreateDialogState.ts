import { useState, useCallback } from "react";
import { useHistory } from "react-router-dom";
import useBoolean from "react-hanger/useBoolean";
import { File } from "../file/File";
import { useTemplateState } from "./TemplateState";
import { useDatabase } from "../database/DatabaseState";
import { CollectionChangedEvent } from "../collections-tree/CollectionsChangedEvent";

export const useTemplateCreateDialogState = (initialFile: File) => {
  const { handleCreateTemplate } = useTemplateState();
  const [file, setFile] = useState(initialFile);
  const deleteOriginal = useBoolean(true);
  const db = useDatabase();
  const hisotry = useHistory();

  const handleNameChange = (name: string) =>
    setFile((file) => ({ ...file, name }));

  const handleCreate = useCallback(() => {
    handleCreateTemplate(file)
      .then(() => {
        if (deleteOriginal.value) {
          db.deleteFiles([initialFile.id]);
        }
        hisotry.push("/templates");
      })
      .then(CollectionChangedEvent);
  }, [file, deleteOriginal]);

  return { file, handleCreate, handleNameChange, deleteOriginal };
};
