import React from "react";
import { FlexProps, Row, Text, Icon } from "@mpkelly/siam";
import { TreeContainer } from "./CollectionsTree";
import { TreeNode, FlatNode, Tree } from "@mpkelly/react-tree";
import { FileType } from "../file/File";

export interface TreeSelectProps extends FlexProps {
  nodes: FlatNode[];
  onChange(node: FlatNode): void;
  selected: FlatNode;
}

export const CollectionsTreeSelect = (props: TreeSelectProps) => {
  const { nodes, onChange, selected, ...rest } = props;

  const renderItem = (node: TreeNode, depth: number) => {
    node.expanded = true;
    const props = {
      selected: selected.id === node.id,
      file: node,
      pl: depth * 16,
      onClick: () => onChange(node),
    };
    switch (node.type) {
      case FileType.Collection:
        return <CollectionsTreeSelectItem {...props} iconName={"collection"} />;
      case FileType.Folder:
        return <CollectionsTreeSelectItem {...props} iconName={"folder"} />;
    }
    throw Error("Unhandled item " + JSON.stringify(node));
  };

  return (
    <TreeContainer {...rest}>
      <Tree
        renderElement={renderItem}
        nodes={nodes}
        nameProperty="name"
        disableDrag
      />
    </TreeContainer>
  );
};

interface CollectionsTreeSelectItemProps extends FlexProps {
  iconName: string;
  file: TreeNode;
}

const CollectionsTreeSelectItem = (props: CollectionsTreeSelectItemProps) => {
  const { iconName, file, ...rest } = props;
  return (
    <Row
      gravity={"center-start"}
      my="lg"
      py="sm"
      borderRadius="sm"
      selectedBackgroundColor="muted-alpha50"
      hoverBackgroundColor="muted-alpha50"
      cursor="pointer"
      {...rest}
    >
      <Icon name={iconName} color="muted" mr="md" />
      <Text color="secondary.text">{file.name}</Text>
    </Row>
  );
};
