import { useState, useEffect } from "react";
import { useDatabase } from "../database/DatabaseState";
import { File } from "../file/File";
import { newId } from "../../util/Identity";

export const useTemplatePageState = () => {
  const db = useDatabase();
  const [templates, setTemplates] = useState<File[]>([]);

  useEffect(() => {
    db.getTemplates().then(setTemplates);
  }, []);

  const handleCreate = (template: File) => {
    const id = newId();
    const file = { ...template, template: false, id };
    db.addFile(file).then();
  };

  return { templates, handleCreate };
};
