import React from "react";
import { FlexProps, useSiam } from "@mpkelly/siam";
import { Page } from "../page/Page";
import { WikiEditor } from "./WikiEditor";
import { File } from "../file/File";

export interface WikiPageProps extends FlexProps {
  file: File;
}

export const WikiPage = (props: WikiPageProps) => {
  const { file, ...rest } = props;
  const { system } = useSiam();
  return (
    <Page {...rest} position="relative" flexDirection="row" mx="auto">
      <WikiEditor system={system} file={file} />
    </Page>
  );
};
