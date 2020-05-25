import { useState, useEffect, useCallback } from "react";
import { useDatabase } from "../database/DatabaseState";
import { File } from "../file/File";
import { newId } from "../../util/Identity";
import { useHistory } from "react-router-dom";

export const useTemplatePageState = () => {
  const db = useDatabase();
  const [templates, setTemplates] = useState<File[]>([]);
  const [newFile, setNewFile] = useState<File>();

  const history = useHistory();

  useEffect(() => {
    db.getTemplates().then(setTemplates);
  }, []);

  const handleCreate = (template: File) => {
    const id = newId();
    const file = { ...template, template: false, id };
    setNewFile(file);
  };

  const confirmCreate = useCallback(
    (substitutions: Object) => {
      if (newFile) {
        db.addFile(newFile).then(() => {
          history.push(`/library/view/${newFile.id}`);
        });
      }
    },
    [newFile]
  );

  return { templates, newFile, handleCreate, confirmCreate };
};
