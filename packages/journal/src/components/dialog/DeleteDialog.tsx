import React from "react";
import { FlexProps } from "@mpkelly/siam";
import { Dialog } from "./Dialog";
import { ConfirmDialogView } from "./ConfirmDialogView";

export interface DeleteDialogProps extends FlexProps {
  onDelete(): void;
  onCancel(): void;
}

export const DeleteDialog = (props: DeleteDialogProps) => {
  const { onDelete, onCancel } = props;
  return (
    <Dialog onClickOutside={onDelete} height={140}>
      <ConfirmDialogView
        messageKey="confirmDelete"
        onConfirm={onDelete}
        onCancel={onCancel}
        buttonKind="danger"
      />
    </Dialog>
  );
};
