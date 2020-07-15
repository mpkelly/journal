import React, { FC } from "react";
import { useHistory, useParams } from "react-router-dom";
import {
  TreeNode,
  FlatNode,
  createAlphaNumericSort,
  Tree,
  Schema,
  SelectionState,
} from "@mpkelly/react-tree";
import { FlexProps, Column, styled, getStyles } from "@mpkelly/siam";
import { FileType, File } from "../file/File";
import { CollectionTreeItem } from "./CollectionTreeItem";
import { FolderTreeItem } from "./FolderTreeItem";
import { DocumenTreeItem } from "./DocumenTreeItem";
import { WikiPageTreeItem } from "./WikiPageTreeItem";

import { useCollectionsTreeState } from "../collection-page/CollectionsPageState";

export const CollectionsTreeView = (props: FlexProps) => {
  const { ...rest } = props;
  const { collections, updateFiles } = useCollectionsTreeState();
  const history = useHistory();
  const {
    location: { pathname },
  } = history;

  // Just to trigger a render
  useParams();

  const handleChange = (
    nodes: FlatNode[],
    property: keyof FlatNode,
    value: any
  ) => {
    updateFiles(nodes as File[], property, value);
  };

  const handleSelectionChange = (selection: SelectionState) => {
    if (selection.selected.length == 1) {
      const selected = selection.selected[0];
      if (!pathname.endsWith(String(selected))) {
        history.push(`/library/view/${selected}`);
      }
    }
  };

  const renderItem = (file: TreeNode, depth: number) => {
    const selected = (pathname || "").endsWith(String(file.id));
    const props = {
      selected,
      file,
      pl: depth * 16,
      onRename: (name: string) => handleChange([file], "name", name),
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
        onChange={handleChange}
        onSelectionChange={handleSelectionChange}
        schema={CollectionsSchema}
        nameProperty="name"
      />
    </TreeContainer>
  );
};

export const TreeContainer: FC<FlexProps> = styled(Column)`
  ${(props) => getStyles(props, "components.tree")}
`;

const CollectionsSchema: Schema = {
  rules: {
    [FileType.Collection]: [
      FileType.Folder,
      FileType.Document,
      FileType.WikiPage,
    ],
    [FileType.Folder]: [FileType.Folder, FileType.Document, FileType.WikiPage],
    [FileType.Document]: [],
    [FileType.WikiPage]: [],
  },
};
