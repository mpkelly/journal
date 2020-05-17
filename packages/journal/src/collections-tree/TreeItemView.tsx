import React from "react";
import { RenderItemParams } from "@atlaskit/tree";
import { Text, Icon, FlexProps, Row, Optional } from "@mpkelly/siam";
import { Link } from "../routing/Link";

export interface TreeItemViewProps extends FlexProps, RenderItemParams {
  icon: string;
  color: string;
  canExpand?: boolean;
}

export const TreeItemView = (props: TreeItemViewProps) => {
  const {
    item,
    canExpand,
    onExpand,
    onCollapse,
    provided,
    icon,
    color,
    ...rest
  } = props;
  const folderIcon = item.isExpanded ? "folder-open" : "folder-closed";
  return (
    <Row
      my="lg"
      gravity={4}
      borderRadius="sm"
      py="sm"
      selectedBackgroundColor="muted-alpha10"
      {...rest}
      ref={provided.innerRef}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
    >
      <Optional includeIf={canExpand}>
        <Icon
          name={folderIcon}
          mr="sm"
          transition="transform .5s"
          color="secondary.text"
          onClick={
            item.isExpanded
              ? () => onCollapse(item.id)
              : () => onExpand(item.id)
          }
        />
      </Optional>
      <Icon name={icon} mr="md" color={color} kind="small" />
      <Link to={`/library/view/${item.id}`}>
        <Text>{item.data.name}</Text>
      </Link>
    </Row>
  );
};
