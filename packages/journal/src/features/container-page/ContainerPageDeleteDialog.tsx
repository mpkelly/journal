import React from "react";
import { FlexProps, Show } from "@mpkelly/siam";
import { useContainerPageState } from "./ContainerPageState";
import { DeleteDialog } from "../../components/dialog/DeleteDialog";

export interface ContainerPageDeleteDialogProps extends FlexProps {}

export const ContainerPageDeleteDialog = () => {
  const {
    showDeleteConfirmation,
    handleConfirmDelete,
    handleCancelDelete,
  } = useContainerPageState();

  return (
    <Show when={showDeleteConfirmation}>
      <DeleteDialog
        onDelete={handleConfirmDelete}
        onCancel={handleCancelDelete}
      />
    </Show>
  );
};
