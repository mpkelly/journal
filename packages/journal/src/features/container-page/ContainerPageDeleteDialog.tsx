import React from "react";
import { FlexProps, Portal, Show } from "@mpkelly/siam";
import { useContainerPageState } from "./ContainerPageState";
import { OverlayView } from "../../components/dialog/OverlayView";
import { ConfirmDialogView } from "../../components/dialog/ConfirmDialogView";

export interface ContainerPageDeleteDialogProps extends FlexProps {}

export const ContainerPageDeleteDialog = () => {
  const {
    showDeleteConfirmation,
    handleConfirmDelete,
    handleCancelDelete,
  } = useContainerPageState();

  return (
    <Show when={showDeleteConfirmation}>
      <Portal>
        <OverlayView
          gravity={"top-center"}
          p="xxl"
          onClick={handleCancelDelete}
        >
          <ConfirmDialogView
            messageKey="confirmDelete"
            onConfirm={handleConfirmDelete}
            onCancel={handleCancelDelete}
            buttonKind="danger"
          />
        </OverlayView>
      </Portal>
    </Show>
  );
};
