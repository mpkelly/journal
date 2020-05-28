import React from "react";
import { Icon, FlexProps, Row, Optional, EditableText } from "@mpkelly/siam";
import { Link } from "../../components/link/Link";
import { TreeNode } from "../../components/tree-kit/Node";
import { CollapseToggle } from "../../components/tree-kit/CollapseToggle";

export interface TreeItemProps extends FlexProps {
  icon: string;
  color: string;
  file: TreeNode;
  canExpand?: boolean;
  onRename(name: string): void;
}

export const CollectionsTreeItem = (props: TreeItemProps) => {
  const { file, canExpand, icon, color, selected, onRename, ...rest } = props;
  const folderIcon = file.expanded ? "folder-open" : "folder-closed";

  return (
    <Row
      my="lg"
      py="sm"
      gravity={4}
      borderRadius="sm"
      selected={selected}
      selectedBackgroundColor="muted-alpha10"
      hoverBackgroundColor="muted-alpha10"
      {...rest}
    >
      <Optional includeIf={canExpand}>
        <CollapseToggle node={file}>
          <Icon
            name={folderIcon}
            transition="transform .5s"
            color="secondary.text"
          />
        </CollapseToggle>
      </Optional>
      <Icon
        ml={!canExpand ? 9 : 0}
        mr="md"
        name={icon}
        color="secondary.text"
        kind="small"
        selectedColor={"primary.text"}
        selected={selected}
      />
      <Link to={`/library/view/${file.id}`} flexGrow={1}>
        <EditableText
          color="secondary.text"
          selectedColor={"primary.text"}
          selected={selected}
          value={file.name}
          onSave={onRename}
          disabled={!selected}
          disabledKind="disabled"
        />
      </Link>
    </Row>
  );
};
