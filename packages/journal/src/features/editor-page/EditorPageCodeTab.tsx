import React, { Fragment } from "react";
import { FlexProps, Column, Show } from "@mpkelly/siam";
import { CodeEditor } from "../code-editor/CodeEditor";
import { useCodeEditorState } from "./EditorPageState";
import { CodeEditorToolbar } from "../code-editor/CodeEditorToolbar";
import { EditorPageLinkCodeDialog } from "./EditorPageLinkCodeDialog";

export const EditorPageCodeTab = (props: FlexProps) => {
  const { ...rest } = props;
  const {
    activeCode,
    handleChange,
    showLinkCodeDialog,
    handleLinkCode,
  } = useCodeEditorState();
  return (
    <Fragment>
      <Column {...rest}>
        <CodeEditor size="100%" codeFile={activeCode} onChange={handleChange}>
          <CodeEditorToolbar mt="auto" />
        </CodeEditor>
      </Column>
      <Show when={showLinkCodeDialog.value}>
        <EditorPageLinkCodeDialog
          onClose={showLinkCodeDialog.toggle}
          onConfirm={handleLinkCode}
        />
      </Show>
    </Fragment>
  );
};
