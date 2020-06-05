import React from "react";
import { FlexProps } from "@mpkelly/siam";
import { Dialog } from "../../components/dialog/Dialog";
import { ConfirmDialogView } from "../../components/dialog/ConfirmDialogView";

export interface SettingsConfirmImportDialogProps extends FlexProps {
  onCancel(): void;
  onConfirm(): void;
}

export const SettingsConfirmImportDialog = (
  props: SettingsConfirmImportDialogProps
) => {
  const { onConfirm, onCancel } = props;
  return (
    <Dialog onClickOutside={onCancel} height={140}>
      <ConfirmDialogView
        messageKey="confirmImportDb"
        onConfirm={onConfirm}
        onCancel={onCancel}
        buttonKind="danger"
      />
    </Dialog>
  );
};
