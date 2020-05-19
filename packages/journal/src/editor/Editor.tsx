import React from "react";
import { Node } from "@mpkelly/react-editor-kit";
import { Row } from "@mpkelly/siam";
import { Editor as TextEditor, Resizable } from "@mpkelly/react-editor-kit";
import { useSettings } from "../settings/SettingsContext";

export interface EditorProps {
  readOnly?: boolean;
  onChange(value: Node[]): void;
  value: Node[];
}

export const Editor = (props: EditorProps) => {
  const placeholder = props.readOnly
    ? undefined
    : "Enter text or paste/drop and image. Some Markdown is also supported.";
  const { settings, updateSettings } = useSettings();
  return (
    <Row className="editorWrapper" overflow="hidden" size={"100%"} m="md">
      <Resizable
        initialWidth={settings.contentWidth}
        onChange={(contentWidth) => updateSettings({ contentWidth })}
        style={{ margin: "0 auto" }}
      >
        <Row
          id="editor"
          className="printable"
          overflow="hidden"
          size={"100%"}
          boxShadow={"editor"}
          backgroundColor="content"
          position="absolute"
        >
          <TextEditor
            style={{
              height: "100%",
              overflowY: "auto",
              overflowX: "hidden",
              paddingTop: 40,
              paddingBottom: 40,
              width: "100%",
            }}
            placeholder={placeholder}
            {...props}
          />
        </Row>
      </Resizable>
    </Row>
  );
};
