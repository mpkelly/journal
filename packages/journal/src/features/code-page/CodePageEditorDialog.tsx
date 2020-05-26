import React from "react";
import { FlexProps, Column, EditableText, Row, Icon } from "@mpkelly/siam";
import { Dialog } from "../../components/dialog/Dialog";
import { CodeEditor } from "../code-editor/CodeEditor";
import { useCodePageState } from "./CodePageState";

export interface CodePageEditorDialogProps extends FlexProps {
  onClose(): void;
}

export const CodePageEditorDialog = (props: CodePageEditorDialogProps) => {
  const { onClose } = props;
  const { activeCodeFile, handleChange, handleEdit } = useCodePageState();
  return (
    <Dialog onClickOutside={onClose} width={800} height={"95vh"}>
      <Column height={"100%"} overflow="hidden">
        <Row gravity="center-start">
          <EditableText
            value={activeCodeFile?.name}
            onSave={(name: string) => handleChange({ name })}
          />
          <Icon
            kind="small.button"
            name="clear"
            ml="auto"
            onClick={() => handleEdit(undefined)}
          />
        </Row>
        <CodeEditor
          mt="md"
          codeFile={activeCodeFile}
          onChange={(data) => handleChange({ data })}
          height={"100%"}
        />
      </Column>
    </Dialog>
  );
};
