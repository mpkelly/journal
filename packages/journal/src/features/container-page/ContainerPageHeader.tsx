import React from "react";
import {
  Icon,
  FlexProps,
  Row,
  Header,
  EditableText,
  Select,
  MenuItemModel,
} from "@mpkelly/siam";
import { File } from "../file/File";
import { useContainerPageState } from "./ContainerPageState";

export interface ContainerPageHeaderProps extends FlexProps {
  file: File;
  icon: string;
  menuItems: MenuItemModel[];
}

export const ContainerPageHeader = (props: ContainerPageHeaderProps) => {
  const { file, menuItems, icon } = props;
  const {
    addItem,
    handleDeleteFile,
    handleNameChanged,
  } = useContainerPageState();
  return (
    <Header flexDirection="row" gravity={"center-start"}>
      <Row gravity="center-start">
        <Icon name={icon} mr="md" />
        <EditableText
          kind="large"
          value={file.name}
          onSave={handleNameChanged}
        />
      </Row>
      <Row gravity="start" ml="auto">
        <Icon
          name="delete"
          kind="button"
          mr="md"
          data-test="delete-container-item"
          onClick={() => handleDeleteFile(file.id)}
        />
        <Select
          items={menuItems}
          onItemClicked={(item: MenuItemModel) => addItem(item.itemType)}
        >
          <Icon name="add" kind="button" data-test="add-item-to-container" />
        </Select>
      </Row>
    </Header>
  );
};
