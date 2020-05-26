import React from "react";
import { FlexProps, Column } from "@mpkelly/siam";
import { CodeEditor } from "../code-editor/CodeEditor";
import { useCodeEditorState } from "./EditorPageState";
import { CodeEditorToolbar } from "../code-editor/CodeEditorToolbar";

export const EditorPageCodeTab = (props: FlexProps) => {
  const { ...rest } = props;
  const { activeCode, handleChange } = useCodeEditorState();
  return (
    <Column {...rest}>
      <CodeEditor size="100%" codeFile={activeCode} onChange={handleChange}>
        <CodeEditorToolbar mt="auto" />
      </CodeEditor>
    </Column>
  );
};
