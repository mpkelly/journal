import { useEffect } from "react";
import { useDatabase } from "../database/DatabaseState";
import { File } from "../file/File";
import useArray from "react-hanger/array/useArray";

export const useTemplatePageState = () => {
  const db = useDatabase();
  const [templates, templateActions] = useArray<File>([]);

  useEffect(() => {
    db.getTemplates().then(templateActions.setValue);
  }, []);

  const handleRename = (id: any, name: string) => {
    db.updateFile(id, { name });
  };

  const handleDelete = (id: any) => {
    db.deleteFiles([id]).then(() => templateActions.removeById(id));
  };

  return {
    templates,
    handleDelete,
    handleRename,
  };
};
