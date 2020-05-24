import React, { useMemo, memo } from "react";
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
import { CodeEditorToolbar } from "./CodeEditorToolbar";
import { useCodeEditorState } from "../editor-page/EditorPageState";

export interface CodeEditorProps extends FlexProps {}

export const CodeEditor = memo((props: CodeEditorProps) => {
  const { ...rest } = props;
  const { system } = useSiam();
  const { activeCode, handleChange } = useCodeEditorState();
  const plugins: Plugin[] = useMemo(
    () => [
      createCodePlugin({ hideToolbar: true }),
      createEditorStylePlugin(system),
    ],
    []
  );
  const hasContent = Boolean(activeCode);
  return (
    <EditorContainer {...rest} borderLeft="1px solid dividers">
      <Show when={hasContent}>
        <EditorKit plugins={plugins} id="codeeditor">
          <Editor
            placeholder={""}
            {...props}
            value={activeCode?.data as Node[]}
            onChange={handleChange}
            style={{ width: "100%", height: "100%" }}
          />
        </EditorKit>
      </Show>
      <CodeEditorToolbar mt="auto" />
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
