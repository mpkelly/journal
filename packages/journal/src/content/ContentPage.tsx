import React, { useEffect, useState } from "react";
import { RouteComponentProps, useParams } from "react-router-dom";
import { ItemData, ItemType } from "./ItemData";
import { ContainerPage } from "../collection-page/ContainerPage";
import { useDatabase } from "../database/Databases";
import { EditorPage } from "../editor/EditorPage";
import { CollectionsPage } from "../collection-page/CollectionsPage";
import { FolderPage } from "../folder-page/FolderPage";

export interface ContentPageProps extends RouteComponentProps {}

export const ContentPage = (props: ContentPageProps) => {
  const [item, setItem] = useState<ItemData>();
  const db = useDatabase();
  const { itemId } = useParams();

  useEffect(() => {
    db.getItem(itemId).then(setItem);
  }, [itemId]);

  if (!item) {
    //TODO loading screen
    return null;
  }

  switch (item.type) {
    case ItemType.Folder:
      return <FolderPage item={item} {...props} />;
    case ItemType.Collection:
      return <CollectionsPage item={item} {...props} />;
    case ItemType.Page:
      return <EditorPage item={item} {...props} />;
  }
  return null;
};
