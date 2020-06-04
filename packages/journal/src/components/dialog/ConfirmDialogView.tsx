import React, { Fragment } from "react";
import { Text, Button, Icon, FlexProps, Column, Row } from "@mpkelly/siam";

export interface ConfirmDialogViewProps extends FlexProps {
  message?: string;
  messageKey?: string;
  onConfirm(): any;
  onCancel(): any;
  buttonKind?: string;
}

export const ConfirmDialogView = (props: ConfirmDialogViewProps) => {
  const { message, messageKey, onConfirm, onCancel, buttonKind } = props;
  return (
    <Fragment>
      <Row gravity="center-start">
        <Icon name="confirm" mr="md" />
        <Text kind="large" labelKey={messageKey}>
          {message}
        </Text>
      </Row>
      <Row mt="auto">
        <Button kind="text" labelKey={"cancel"} onClick={onCancel} autoFocus />
        <Button
          labelKey={"confirm"}
          onClick={onConfirm}
          ml="auto"
          kind={buttonKind}
        />
      </Row>
    </Fragment>
  );
};
