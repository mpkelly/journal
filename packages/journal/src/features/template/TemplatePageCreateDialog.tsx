import React, { useState } from "react";
import {
  Text,
  Button,
  Icon,
  FlexProps,
  Column,
  Row,
  Input,
} from "@mpkelly/siam";
import { stopEvent } from "@mpkelly/react-editor-kit";
import { File } from "../file/File";

export interface TemplatePageCreateDialogProps extends FlexProps {
  file: File;
}

export const TemplatePageCreateDialog = (
  props: TemplatePageCreateDialogProps
) => {
  const { file, ...rest } = props;
  const [state, setState] = useState({
    name: file.name,
    category: "",
    color: "",
  });

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
          value={state.name}
          placeholderKey="enterName"
          autoFocus
          onChange={(name: string) => setState((state) => ({ ...state, name }))}
        />
      </Column>
      <Row mt="auto">
        <Button kind="text" labelKey={"cancel"} onClick={console.log} />
        <Button labelKey={"comfirm"} onClick={console.log} ml="auto" />
      </Row>
    </Column>
  );
};
