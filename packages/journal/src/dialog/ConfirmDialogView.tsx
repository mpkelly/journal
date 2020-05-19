import React from "react";
import { Text, Button, Icon, FlexProps, Column, Row } from "@mpkelly/siam";

export interface ConfirmDialogViewProps extends FlexProps {
  message?: string;
  messageKey?: string;
  onConfirm(): any;
  onCancel(): any;
  buttonKind?: string;
}

export const ConfirmDialogView = (props: ConfirmDialogViewProps) => {
  const {
    message,
    messageKey,
    onConfirm,
    onCancel,
    buttonKind,
    ...rest
  } = props;
  return (
    <Column
      p="lg"
      width={300}
      height={170}
      zIndex={"dialogs"}
      backgroundColor="content"
      borderRadius="sm"
      boxShadow="sm"
      {...rest}
    >
      <Row gravity="center-start">
        <Icon name="confirm" mr="md" />
        <Text kind="large" labelKey={messageKey}>
          {message}
        </Text>
      </Row>
      <Row mt="auto">
        <Button kind="text" labelKey={"cancel"} onClick={onCancel} />
        <Button
          labelKey={"comfirm"}
          onClick={onConfirm}
          ml="auto"
          kind={buttonKind}
        />
      </Row>
    </Column>
  );
};
