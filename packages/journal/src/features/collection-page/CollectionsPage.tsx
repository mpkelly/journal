import React from "react";
import { FlexProps } from "@mpkelly/siam";
import { ContainerPage } from "../container-page/ContainerPage";
import { File } from "../file/File";
import { JournalHelp } from "../help/Help";

export interface CollectionsPageProps extends FlexProps {
  file: File;
}

export const CollectionsPage = (props: CollectionsPageProps) => {
  const { file, ...rest } = props;
  //return <JournalHelp />;
  return <ContainerPage icon="collection" file={file} {...rest} />;
};
