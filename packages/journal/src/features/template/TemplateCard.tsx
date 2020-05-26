import React from "react";
import {
  Button,
  Icon,
  FlexProps,
  Column,
  Row,
  EditableText,
  Select,
  MenuItemModel,
} from "@mpkelly/siam";
import { File } from "../file/File";
import { useHistory } from "react-router-dom";

export interface TemplateCardProps extends FlexProps {
  template: File;
  onCreate(): void;
  onDelete(): void;
  onRename(name: string): void;
}

export const TemplateCard = (props: TemplateCardProps) => {
  const { template, onCreate, onRename, onDelete, ...rest } = props;
  const history = useHistory();
  const handleEdit = () => history.push(`/templates/edit/${template.id}`);

  const menuItems: MenuItemModel[] = [
    {
      labelKey: "editTemplate",
      iconName: "edit",
      onClick: handleEdit,
    },
    {
      labelKey: "delete",
      iconName: "delete",
      onClick: onDelete,
    },
  ];
  return (
    <Column
      p="lg"
      mr="lg"
      mb="lg"
      width={300}
      height={200}
      background="background-light1"
      flexShrink={0}
      position="relative"
      {...rest}
    >
      <EditableText
        kind="xlarge"
        value={template.name}
        onSave={onRename}
        maxWidth={"80%"}
      />
      <Select
        items={menuItems}
        onItemClicked={(item: MenuItemModel) => item.onClick()}
        position={"absolute"}
        right={8}
      >
        <Icon name="more" kind="button" />
      </Select>
      <Row mt="auto" gravity="center-start">
        <Icon name="document" color="accent" />
        <Button labelKey="create" kind="text" onClick={onCreate} ml="auto" />
      </Row>
    </Column>
  );
};
