import React, { Fragment } from "react";
import { Page } from "../page/Page";
import { File } from "../file/File";
import { Element } from "@mpkelly/react-editor-kit";
import { EditorPageToolbar } from "./EditorPageToolbar";
import { EditorPageEditor } from "./EditorPageEditor";
import {
  EditorStateProvider,
  EditorSideTabStateProvider,
  CodeEditorStateProvider,
} from "./EditorPageState";
import { EditorPageSideTab } from "./EditorPageSideTab";

export interface EditorPageProps {
  file: File;
  defaultValue?(): Element[];
}

export const EditorPage = (props: EditorPageProps) => {
  const { file } = props;
  return (
    <Fragment>
      <Page
        p="0"
        size={"100%"}
        flexGrow={1}
        backgroundColor="content"
        overflow="hidden"
      >
        <EditorStateProvider {...props}>
          <EditorPageEditor>
            <EditorSideTabStateProvider>
              <CodeEditorStateProvider file={file}>
                <EditorPageSideTab />
              </CodeEditorStateProvider>
              <EditorPageToolbar width={50} minWidth={50} />
            </EditorSideTabStateProvider>
          </EditorPageEditor>
        </EditorStateProvider>
      </Page>
    </Fragment>
  );
};
