import React, { Fragment } from "react";
import { Page } from "../page/Page";
import { MenuItemModel } from "@mpkelly/siam";
import { File, FileType } from "../file/File";
import { ContainerPageHeader } from "./ContainerPageHeader";
import { ContainerPageTable } from "./ContainerPageTable";
import { ContainerPageStateProvider } from "./ContainerPageState";
import { ContainerPageDeleteDialog } from "./ContainerPageDeleteDialog";

export interface ContainerPageProps {
  file: File;
  icon: string;
}

export const ContainerPage = (props: ContainerPageProps) => {
  const { icon, file } = props;
  return (
    <ContainerPageStateProvider>
      <Fragment>
        <Page position="relative" overflow="hidden">
          <ContainerPageHeader file={file} menuItems={menuItems} icon={icon} />
          <ContainerPageTable size={"100%"} flexGrow={1} />
        </Page>
        <ContainerPageDeleteDialog />
      </Fragment>
    </ContainerPageStateProvider>
  );
};

const menuItems: MenuItemModel[] = [
  {
    labelKey: "addFolder",
    iconName: "folder",
    itemType: FileType.Folder,
  },
  {
    labelKey: "addDocumentPage",
    iconName: "document",
    itemType: FileType.Document,
  },
  {
    labelKey: "addWikiPage",
    iconName: "wikipage",
    itemType: FileType.WikiPage,
  },
];
