import React from "react";
import {
  Text,
  Checkbox,
  FlexProps,
  Column,
  Row,
  Show,
  Icon,
  Button,
} from "@mpkelly/siam";
import { Dialog } from "../../components/dialog/Dialog";
import { useEditorPageLinkCodeDialogState } from "./EditorPageLinkCodeDialogState";
import { useEditorState } from "./EditorPageState";
import { stopEvent } from "@mpkelly/react-editor-kit";

export interface EditorPageLinkCodeDialogProps extends FlexProps {
  onClose(): void;
  onConfirm(ids: string[]): void;
}

export const EditorPageLinkCodeDialog = (
  props: EditorPageLinkCodeDialogProps
) => {
  const { onClose, onConfirm } = props;
  const { file } = useEditorState();
  const {
    codeFiles,
    handleToggleSelected,
    isSelected,
    canSubmit,
    selectedFiles,
  } = useEditorPageLinkCodeDialogState(file.linkedCode || []);
  const handleConfirm = () => {
    onConfirm(selectedFiles);
  };
  return (
    <Dialog
      width={300}
      height={"auto"}
      maxHeight={500}
      onClickOutside={onClose}
    >
      <Column overflowY="auto">
        <Row gravity="center-start" mb="lg">
          <Icon name="code" mr="md" />
          <Text kind="large" labelKey={"linkCodeFiles"} />
        </Row>
        <Show when={codeFiles.length == 0}>
          <Text
            mx="auto"
            kind="small"
            color="secondary.text"
            labelKey="No code files"
          />
        </Show>
        {codeFiles.map((codeFile) => (
          <Row
            key={codeFile.id}
            gravity="center-start"
            height={40}
            my="sm"
            pl={2}
            hoverBackgroundColor="muted-alpha50"
            cursor="pointer"
            onClick={() => handleToggleSelected(codeFile.id)}
          >
            <Checkbox
              checked={isSelected(codeFile.id)}
              onChange={() => handleToggleSelected(codeFile.id)}
              onClick={stopEvent}
            />
            <Text ml="md">{codeFile.name}</Text>
          </Row>
        ))}
        <Row mt="lg">
          <Button kind="text" labelKey={"cancel"} onClick={onClose} autoFocus />
          <Button
            labelKey={"comfirm"}
            disabled={!canSubmit}
            disabledKind="text"
            onClick={canSubmit ? handleConfirm : undefined}
            ml="auto"
          />
        </Row>
      </Column>
    </Dialog>
  );
};
