import React from "react";
import { Text, FlexProps, Nav, Scope } from "@mpkelly/siam";
import {
  Node,
  createOutline,
  useEditorKit,
  ReactEditor,
  Element,
} from "@mpkelly/react-editor-kit";

const FontSize = 20;

export interface EditorPageOutlineTabProps extends FlexProps {
  value: Element[];
}

export const EditorPageOutlineTab = (props: EditorPageOutlineTabProps) => {
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
    <Scope value="nav">
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
    </Scope>
  );
};
