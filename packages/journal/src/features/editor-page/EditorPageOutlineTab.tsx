import React from "react";
import { Text, FlexProps, Nav, Scope } from "@mpkelly/siam";
import {
  Node,
  createOutline,
  useEditorKit,
  ReactEditor,
} from "@mpkelly/react-editor-kit";
import { useEditorState } from "./EditorPageState";

const FontSize = 20;

export const EditorPageOutlineTab = (props: FlexProps) => {
  const { ...rest } = props;
  const { value } = useEditorState();
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
