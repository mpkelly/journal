import React, { useRef, useState, useCallback } from "react";
import { Text, FlexProps, Nav, Scope, Row, EditableText } from "@mpkelly/siam";
import {
  Node,
  createOutline,
  useEditorKit,
  ReactEditor,
  Element,
  OutlineEntry,
  Transforms,
} from "@mpkelly/react-editor-kit";
import { Show } from "../../util/Show";
import useBoolean from "react-hanger/array/useBoolean";

const FontSize = 20;

export interface EditorPageOutlineTabProps extends FlexProps {
  value: Element[];
}

export const EditorPageOutlineTab = (props: EditorPageOutlineTabProps) => {
  return (
    <Scope value="nav">
      {/* <TocOutline {...props} /> */}
      <ElementOutline {...props} />
    </Scope>
  );
};

const TocOutline = (props: EditorPageOutlineTabProps) => {
  const { value, ...rest } = props;
  const { editor } = useEditorKit();
  const outline = createOutline(value);
  const handleClick = (node: Node) => {
    const element = ReactEditor.toDOMNode(editor, node);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <Nav {...rest} overflowY="auto" p="md" backgroundColor="background">
      {outline.map((entry) => {
        return (
          <Text
            my="md"
            fontSize={FontSize - entry.depth * 2}
            pl={entry.depth * 16}
            cursor={"pointer"}
            onClick={() => handleClick(entry.node)}
          >
            {entry.content}
          </Text>
        );
      })}
    </Nav>
  );
};

const ElementOutline = (props: EditorPageOutlineTabProps) => {
  const { value, ...rest } = props;
  const { editor } = useEditorKit();
  const [over, setOver] = useState<Node>();
  const [editing, setEditing] = useState<Node>();
  const outline = createElementOutline(value);
  const previousOutline = useRef<string>();

  const handleEnter = (node: Node) => {
    const element = ReactEditor.toDOMNode(editor, node);
    if (element) {
      previousOutline.current = element.style.outline;
      element.style.outline = "1px solid orange";
    }
    setOver(node);
  };

  const handleLeave = (node: Node) => {
    const element = ReactEditor.toDOMNode(editor, node);
    if (element) {
      element.style.outline = previousOutline.current as string;
    }
    setOver(undefined);
  };

  const handleChangeId = useCallback(
    (id: string) => {
      Transforms.setNodes(
        editor,
        { id },
        { at: ReactEditor.findPath(editor, over as Node) }
      );
      setEditing(undefined);
    },
    [over]
  );

  return (
    <Nav {...rest} overflowY="auto" p="lg" backgroundColor="background">
      {outline.map((entry) => {
        return (
          <Row
            gravity="center-start"
            title={entry.content}
            onMouseEnter={() => handleEnter(entry.node)}
            onMouseLeave={() => handleLeave(entry.node)}
          >
            <Text my="md" kind="small" pl={entry.depth * 16} cursor={"pointer"}>
              {entry.node.type}
            </Text>
            <Show
              when={
                entry.node === over || editing === entry.node || entry.node.id
              }
            >
              <EditableText
                fontSize={12}
                ml="md"
                color="secondary.text"
                value={entry.node.id || "click to add id"}
                onEditStart={() => setEditing(entry.node)}
                onEditStop={() => setEditing(undefined)}
                onSave={handleChangeId}
              />
            </Show>
          </Row>
        );
      })}
    </Nav>
  );
};

export const createElementOutline = (
  nodes: Node[],
  depth = 0
): OutlineEntry[] => {
  let outline: OutlineEntry[] = [];
  nodes.forEach((node) => {
    if (node.type) {
      outline.push({
        content: Node.string(node),
        depth,
        node,
      });
    }
    if (node.children) {
      outline = outline.concat(createElementOutline(node.children, depth + 1));
    }
  });
  return outline;
};
