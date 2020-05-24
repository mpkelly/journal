import React from "react";
import { FlexProps } from "@mpkelly/siam";
import { File } from "../file/File";
import { ContainerPage } from "../container-page/ContainerPage";

export interface FolderPageProps extends FlexProps {
  file: File;
}

export const FolderPage = (props: FolderPageProps) => {
  const { file, ...rest } = props;

  return <ContainerPage icon="folder" file={file} {...rest} />;
};
