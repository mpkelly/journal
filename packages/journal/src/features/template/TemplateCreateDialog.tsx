import React from "react";
import {
  Text,
  Button,
  Icon,
  FlexProps,
  Column,
  Row,
  Input,
  Checkbox,
} from "@mpkelly/siam";
import { stopEvent } from "@mpkelly/react-editor-kit";
import { File } from "../file/File";
import { useTemplateCreateDialogState } from "./TemplateCreateDialogState";

export interface TemplateCreateDialogProps extends FlexProps {
  file: File;
  onCancel(): void;
}

export const TemplateCreateDialog = (props: TemplateCreateDialogProps) => {
  const { file: initialFile, onCancel, ...rest } = props;
  const {
    file,
    handleNameChange,
    handleCreate,
    deleteOriginal,
  } = useTemplateCreateDialogState(initialFile);

  return (
    <Column
      p="lg"
      width={300}
      height={"auto"}
      zIndex={"dialogs"}
      backgroundColor="background-light1"
      borderRadius="sm"
      boxShadow="sm"
      onClick={stopEvent}
      onContextMenu={stopEvent}
      {...rest}
    >
      <Row gravity="center-start">
        <Icon name="template" mr="lg" />
        <Text labelKey={"createTemplate"} fontWeight="bold" kind="large" />
      </Row>
      <Column my="xl" width="100%">
        <Input
          labelKey="name"
          value={file.name}
          placeholderKey="enterName"
          autoFocus
          onChange={handleNameChange}
        />
        <Row mt="md">
          <Checkbox
            checked={deleteOriginal.value}
            onChange={deleteOriginal.toggle}
          />
          <Text kind="small" ml="md" labelKey="deleteOriginal" />
        </Row>
      </Column>

      <Row mt="auto">
        <Button kind="text" labelKey={"cancel"} onClick={onCancel} />
        <Button labelKey={"comfirm"} onClick={handleCreate} ml="auto" />
      </Row>
    </Column>
  );
};
