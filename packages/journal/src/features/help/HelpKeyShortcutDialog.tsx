import React from "react";
import { Text, Icon, FlexProps, Row } from "@mpkelly/siam";
import { Dialog } from "../../components/dialog/Dialog";

export interface HelpKeyShortcutDialogProps extends FlexProps {
  titleLabelKey: string;
  onClose(): void;
}

export const HelpKeyShortcutDialog = (props: HelpKeyShortcutDialogProps) => {
  const { titleLabelKey, onClose, children } = props;
  return (
    <Dialog onClickOutside={onClose} overflow="hidden">
      <Row gravity="center-start" mb="md">
        <Text kind="large" labelKey={titleLabelKey} />
        <Icon name="clear" kind="xsmall.button" ml="auto" onClick={onClose} />
      </Row>
      {children}
    </Dialog>
  );
};
