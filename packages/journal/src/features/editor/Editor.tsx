import React from "react";
import { Node } from "@mpkelly/react-editor-kit";
import { Row } from "@mpkelly/siam";
import { Editor as TextEditor } from "@mpkelly/react-editor-kit";

export interface EditorProps {
  readOnly?: boolean;
  onChange(value: Node[]): void;
  value: Node[];
}

export const Editor = (props: EditorProps) => {
  //TODO i18n
  const placeholder = props.readOnly
    ? undefined
    : "Enter text or paste/drop and image. Some Markdown is also supported.";
  return (
    <Row
      id="editor"
      className="printable"
      overflow="hidden"
      size={"100%"}
      backgroundColor="content"
    >
      <TextEditor placeholder={placeholder} {...props} />
    </Row>
  );
};
