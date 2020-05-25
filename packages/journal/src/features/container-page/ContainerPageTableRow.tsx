import React from "react";
import { Text, Icon, FlexProps, Select, MenuItemModel } from "@mpkelly/siam";
import { File } from "../file/File";
import { Link } from "../routing/Link";
import { useContainerPageState } from "./ContainerPageState";

export interface ContainerPageTableRowProps extends FlexProps {
  file: File;
  icon: string;
  color: string;
}

export const ContainerPageTableRow = (props: ContainerPageTableRowProps) => {
  const { file, icon, color } = props;
  const { handleDeleteFile: handleDeleteItem } = useContainerPageState();

  //TODO use correct last modified date
  return (
    <tr className="row" key={file.id}>
      <td className="cell">
        <Icon name={icon} color={color} />
      </td>
      <td className="cell">
        <Link to={`/library/view/${file.id}`}>
          <Text color="accent">{file.name}</Text>
        </Link>
      </td>
      <td className="cell">
        <Text>2 days ago</Text>
      </td>
      <td className="cell">
        <Select
          items={menuItems}
          onItemClicked={() => handleDeleteItem(file.id)}
          location="start"
        >
          <Icon name={"more"} kind="button" ml="auto" />
        </Select>
      </td>
    </tr>
  );
};

const menuItems: MenuItemModel[] = [
  {
    labelKey: "deleteItem",
    iconName: "delete",
  },
];
