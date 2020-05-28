import React from "react";
import { Column } from "@mpkelly/siam";
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
    <Page
      p="0"
      size={"100%"}
      flexGrow={1}
      backgroundColor="content"
      overflow="hidden"
      key={file.id}
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
  );
};
