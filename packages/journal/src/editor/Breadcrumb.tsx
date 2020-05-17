import { ItemData } from "../content/ItemData";
import { CollectionsData } from "../collections-tree/CollectionsData";

export interface BreadcrumbProps {
  collections: CollectionsData;
  item: ItemData;
}

export const Breadcrumb = (props: BreadcrumbProps) => {
  const { collections, item } = props;
  return null;
  // const root = collection.content[0];
  // const pathItems = getPath(root, collection.content, item);
  // return (
  //   <Row alignItems="center" flexShrink={1} overflow={"hidden"}>
  //     <Icon name={CollectionIcon} color={collection.settings.color} mr="md" />
  //     <Text>{root.name}</Text>
  //     {pathItems.map((item) => (
  //       <Row alignItems="center">
  //         <Text color="secondary.text" mx="md">
  //           /
  //         </Text>
  //         <Text>{item.name}</Text>
  //       </Row>
  //     ))}
  //   </Row>
  // );
};

const getPath = (root: ItemData, items: ItemData[], leaf: ItemData) => {
  return null;
  // const path: Item[] = [];
  // let current: Item | undefined = leaf;
  // while (current && current.parentId && current !== root) {
  //   path.unshift(current);
  //   current = items.find((item) => current && item.id === current.parentId);
  // }
  // return path;
};
