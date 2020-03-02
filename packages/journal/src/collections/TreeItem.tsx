import React, { useState, Fragment, useRef, memo } from "react";
import { Row, Icon, EditableText, styled, Menu, FlexProps } from "udx-react";
import { useCollections } from "./CollectionContext";
import { OverflowItem } from "../menu/OverflowMenu";
import { Link } from "../routing/Link";
import { CSSProperties } from "styled-components";
import { Show } from "../util/Show";
import { PopupMenuLayer } from "../style/Layers";
import { Overlay } from "../util/Overlay";
import { isRouteSelected } from "../routing/Router";

export interface TreeItemProps {
  items?: OverflowItem[];
  collectionId: number;
  id: string;
  name: string;
  style: CSSProperties;
  collapsed?: boolean;
  iconProps?: FlexProps;
  onClick: (event: any) => any;
  icon: string;
  color?: any;
}

export const TreeItem = memo((props: TreeItemProps) => {
  const { style, name, collectionId, id, icon, items, onClick, color } = props;
  const [showContextMenu, setShowContextMenu] = useState(false);
  const path = `/${collectionId}/${id}`;
  const isSelected = isRouteSelected(path);
  const background = isSelected || showContextMenu ? "nav_selected" : undefined;
  const contextPoint = useRef({ x: 0, y: 0 });
  const { renameItem } = useCollections();

  const toggleContextMenu = (event: any) => {
    contextPoint.current.x = event.clientX;
    contextPoint.current.y = event.clientY;
    setShowContextMenu(!showContextMenu);
    event.preventDefault();
  };

  const iconProps = props.iconProps || {};

  return (
    <Fragment>
      <Link to={`/edit${path}`}>
        <Row
          style={style}
          backgroundColor={background}
          position="relative"
          alignItems="center"
          onClick={(e: any) => {
            isSelected && onClick(e);
          }}
          onContextMenu={toggleContextMenu}
        >
          <Icon
            name={icon}
            color={color || "nav_secondaryText"}
            {...iconProps}
          />
          <StyledEditableText
            ml="md"
            variant="editable"
            color="nav_primaryText"
            disabled={!isSelected}
            value={name}
            onSave={(name: string) => renameItem(collectionId, id, name)}
          />
        </Row>
      </Link>
      <Show when={showContextMenu}>
        <Overlay onClick={toggleContextMenu}>
          <Menu
            items={items || []}
            position={"absolute"}
            top={contextPoint.current.y}
            left={contextPoint.current.x}
            zIndex={PopupMenuLayer}
          />
        </Overlay>
      </Show>
    </Fragment>
  );
});

const StyledEditableText = styled(EditableText)`
  box-decoration-break: clone;
  -webkit-box-decoration-break: clone;
`;
