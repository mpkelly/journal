import React, { useMemo, memo, ReactNode } from "react";
import { FlexProps, Column, useSiam, styled } from "@mpkelly/siam";
import {
  EditorKit,
  Plugin,
  createCodePlugin,
  Editor,
  Node,
} from "@mpkelly/react-editor-kit";
import { createEditorStylePlugin } from "../editor-page/EditorPageStylePlugin";
import { Show } from "../../util/Show";

import { CodeFile } from "./CodeFile";

export interface CodeEditorProps extends FlexProps {
  codeFile?: CodeFile;
  onChange(node: Node[]): void;
  children?: ReactNode;
}

export const CodeEditor = memo((props: CodeEditorProps) => {
  const { codeFile, onChange, children, ...rest } = props;
  const { system } = useSiam();
  const plugins: Plugin[] = useMemo(
    () => [
      createCodePlugin({ hideToolbar: true }),
      createEditorStylePlugin(system),
    ],
    []
  );
  const hasContent = Boolean(codeFile);
  return (
    <EditorContainer {...rest} borderLeft="1px solid dividers">
      <Show when={hasContent}>
        <EditorKit plugins={plugins} id="codeeditor">
          <Editor
            placeholder={""}
            {...props}
            value={codeFile?.data as Node[]}
            onChange={onChange}
            style={{ width: "100%", height: "100%" }}
          />
        </EditorKit>
      </Show>
      {children}
    </EditorContainer>
  );
});

const EditorContainer = styled(Column)`
  #codeeditor {
    padding: 0;
    pre {
      height: 100%;
      overflow-y: auto;
      margin: 0 !important;
      background-color: rgba(0, 0, 0, 0.1);
    }

    .rek-code-property {
      color: mediumseagreen;
    }

    .rek-code-selector {
      color: lightblue;
    }

    .rek-code-comment {
      color: orange;
    }
  }
`;
