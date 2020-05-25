import { File } from "../file/File";
import { newId } from "../../util/Identity";
import { useDatabase } from "../database/DatabaseState";
import { fireEvent } from "../../util/events/Events";

export const useTemplateState = () => {
  const db = useDatabase();

  const handleCreateTemplate = (file: File) => {
    file.id = newId();
    file.template = true;
    return db.addFile(file).then(() => fireEvent("templateschanged"));
  };

  return { handleCreateTemplate };
};
