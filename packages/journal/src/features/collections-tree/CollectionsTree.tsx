import React, { memo } from "react";
import { useParams } from "react-router-dom";
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

  const { fileId } = useParams();

  const renderItem = (file: TreeNode, depth: number) => {
    const selected = file.id === fileId;
    const props = {
      selected,
      file,
      pl: depth * 16,
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

const treeSortFunction = createAlphaNumericSort("name");

const TreeContainer = styled(Column)`
  ${(props) => getStyles(props, "components.tree")}
`;
