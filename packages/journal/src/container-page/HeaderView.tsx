import React from "react";
import {
  Icon,
  FlexProps,
  Row,
  Header,
  EditableText,
  Select,
  MenuItemModel,
  Portal,
  Show,
} from "@mpkelly/siam";
import { useContainerPage } from "../collection-page/ContainerPageContext";
import { ItemData } from "../content/ItemData";
import { ConfirmDialogView } from "../dialog/ConfirmDialogView";
import { OverlayView } from "../dialog/OverlayView";

export interface HeaderViewProps extends FlexProps {
  item: ItemData;
  icon: string;
  menuItems: MenuItemModel[];
}

export const HeaderView = (props: HeaderViewProps) => {
  const { item, menuItems, icon } = props;
  const {
    addItem,
    handleNameChanged,
    showDeleteConfirmation,
    handleDeleteItem,
    handleConfirmDelete,
    handleCancelDelete,
  } = useContainerPage();
  return (
    <Header flexDirection="row" gravity={"start"}>
      <Row gravity="start">
        <Icon name={icon} kind="large" mr="md" color="accent" />
        <EditableText
          kind="large"
          value={item.name}
          onSave={handleNameChanged}
        />
      </Row>
      <Row gravity="start" ml="auto">
        <Icon
          name="delete"
          kind="button"
          mr="md"
          onClick={() => handleDeleteItem(item.id)}
        />
        <Select
          items={menuItems}
          onItemClicked={(item: MenuItemModel) => addItem(item.itemType)}
        >
          <Icon name="add" kind="button" />
        </Select>
      </Row>
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
    </Header>
  );
};
