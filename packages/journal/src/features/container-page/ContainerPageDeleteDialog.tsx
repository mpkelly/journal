import React from "react";
import { FlexProps, Show } from "@mpkelly/siam";
import { useContainerPageState } from "./ContainerPageState";
import { ConfirmDialogView } from "../../components/dialog/ConfirmDialogView";
import { Dialog } from "../../components/dialog/Dialog";

export interface ContainerPageDeleteDialogProps extends FlexProps {}

export const ContainerPageDeleteDialog = () => {
  const {
    showDeleteConfirmation,
    handleConfirmDelete,
    handleCancelDelete,
  } = useContainerPageState();

  return (
    <Show when={showDeleteConfirmation}>
      <Dialog
        gravity={"top-center"}
        p="xxl"
        onClickOutside={handleCancelDelete}
        height={140}
      >
        <ConfirmDialogView
          messageKey="confirmDelete"
          onConfirm={handleConfirmDelete}
          onCancel={handleCancelDelete}
          buttonKind="danger"
        />
      </Dialog>
    </Show>
  );
};
