import React from "react";
import { Row, Icon, Text } from "udx-react";
import { Item } from "../content/Item";
import { Collection } from "../collections/Collection";
import { CollectionIcon, ChevronRightIcon } from "../icons/IconNames";

export interface BreadcrumbProps {
  collection: Collection;
  item: Item;
}

export const Breadcrumb = (props: BreadcrumbProps) => {
  const { collection, item } = props;
  const root = collection.content[0];
  const pathItems = getPath(root, collection.content, item);
  return (
    <Row alignItems="center" flexShrink={1} overflow={"hidden"}>
      <Icon name={CollectionIcon} color={collection.settings.color} mr="md" />
      <Text>{root.name}</Text>
      {pathItems.map(item => (
        <Row alignItems="center">
          <Text color="secondaryText" mx="md">
            /
          </Text>
          <Text>{item.name}</Text>
        </Row>
      ))}
    </Row>
  );
};

const getPath = (root: Item, items: Item[], leaf: Item) => {
  const path: Item[] = [];
  let current: Item | undefined = leaf;
  while (current && current.parentId && current !== root) {
    path.unshift(current);
    current = items.find(item => current && item.id === current.parentId);
  }
  return path;
};
