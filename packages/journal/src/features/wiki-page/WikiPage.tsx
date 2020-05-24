import React from "react";
import { FlexProps, Row, useSiam } from "@mpkelly/siam";
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
    <Page {...rest} position="relative">
      <Row mx="auto">
        <WikiEditor system={system} file={file} />
      </Row>
    </Page>
  );
};
