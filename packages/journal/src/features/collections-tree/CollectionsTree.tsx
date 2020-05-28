import React, { FC } from "react";
import { useHistory, useParams } from "react-router-dom";
import { FlexProps, Column, styled, getStyles } from "@mpkelly/siam";
import { FileType, File } from "../file/File";
import { CollectionTreeItem } from "./CollectionTreeItem";
import { FolderTreeItem } from "./FolderTreeItem";
import { DocumenTreeItem } from "./DocumenTreeItem";
import { WikiPageTreeItem } from "./WikiPageTreeItem";
import {
  TreeNode,
  FlatNode,
  createAlphaNumericSort,
} from "../../components/tree-kit/Node";
import { Tree } from "../../components/tree-kit/Tree";
import { useCollectionsTreeState } from "../collection-page/CollectionsPageState";

export const CollectionsTreeView = (props: FlexProps) => {
  const { ...rest } = props;
  const { collections, updateFile } = useCollectionsTreeState();

  const handleChange = (
    node: FlatNode,
    property: keyof FlatNode,
    value: any
  ) => {
    const next = { ...node, [property]: value };
    updateFile(next as File);
  };

  // Just to trigger a render
  useParams();

  const {
    location: { pathname },
  } = useHistory();

  const renderItem = (file: TreeNode, depth: number) => {
    const selected = pathname.endsWith(String(file.id));
    const props = {
      selected,
      file,
      pl: depth * 16,
      onRename: (name: string) => handleChange(file, "name", name),
    };
    switch (file.type) {
      case FileType.Collection:
        return <CollectionTreeItem {...props} />;
      case FileType.Folder:
        return <FolderTreeItem {...props} />;
      case FileType.Document:
        return <DocumenTreeItem {...props} />;
      case FileType.WikiPage:
        return <WikiPageTreeItem {...props} />;
    }
    throw Error("Unhandled item " + JSON.stringify(file));
  };

  return (
    <TreeContainer {...rest}>
      <Tree
        renderElement={renderItem}
        nodes={collections}
        handleChange={handleChange}
        sortFunction={treeSortFunction}
      />
    </TreeContainer>
  );
};

export const treeSortFunction = createAlphaNumericSort("name");

export const TreeContainer: FC<FlexProps> = styled(Column)`
  ${(props) => getStyles(props, "components.tree")}
`;
