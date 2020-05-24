import React, { useEffect, useState } from "react";
import { useParams, Redirect } from "react-router-dom";
import { useDatabase } from "../database/DatabaseState";
import { EditorPage } from "../editor-page/EditorPage";
import { CollectionsPage } from "../collection-page/CollectionsPage";
import { FolderPage } from "../folder-page/FolderPage";
import { WikiPage } from "../wiki-page/WikiPage";
import { File, FileType } from "../file/File";

export const FilePage = () => {
  const [file, setFile] = useState<File | null>();
  const db = useDatabase();
  const { fileId } = useParams();

  useEffect(() => {
    if (fileId) {
      db.getFile(fileId).then((item) => {
        if (item) {
          setFile(item);
        } else {
          setFile(null);
        }
      });
    }
  }, [fileId]);

  //Not found
  if (file === null) {
    return <Redirect to="/library" />;
  }

  if (file === undefined) {
    //TODO loading screen
    return null;
  }

  switch (file.type) {
    case FileType.Folder:
      return <FolderPage file={file} />;
    case FileType.Collection:
      return <CollectionsPage file={file} />;
    case FileType.Document:
      return <EditorPage file={file} />;
    case FileType.WikiPage:
      return <WikiPage file={file} />;
  }
};
