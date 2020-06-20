import React from "react";
import { FlexProps } from "@mpkelly/siam";
import { ContainerPage } from "../container-page/ContainerPage";
import { File } from "../file/File";

export interface CollectionsPageProps extends FlexProps {
  file: File;
}

export const CollectionsPage = (props: CollectionsPageProps) => {
  const { file, ...rest } = props;
  return <ContainerPage icon="collection" file={file} {...rest} />;
};
