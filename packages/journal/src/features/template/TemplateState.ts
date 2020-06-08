import { File } from "../file/File";
import { newId } from "../../util/Identity";
import { useDatabase } from "../database/DatabaseState";
import { fireEvent } from "../../util/events/Events";

export const useTemplateState = () => {
  const db = useDatabase();

  const handleCreateTemplate = (file: File) => {
    const template = { ...file, template: true };
    template.id = newId();
    return db.addFile(template).then(() => fireEvent("templateschanged"));
  };

  return { handleCreateTemplate };
};
