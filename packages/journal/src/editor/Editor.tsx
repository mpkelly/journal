import React from "react";
import { Editor as TextEditor, Resizable } from "@mpkelly/react-editor-kit";
import { useSettings } from "../settings/SettingsContext";
import { Node } from "slate";
import { Row } from "udx-react";

export interface EditorProps {
  readOnly?: boolean;
  onChange(value: Node[]): void;
  value: Node[];
}

export const Editor = (props: EditorProps) => {
  const placeholder = props.readOnly ? undefined : "Write something...";
  const { settings, updateSettings } = useSettings();
  return (
    <Row className="printable" overflow="hidden">
      <Resizable
        initialWidth={settings.contentWidth}
        onChange={contentWidth => updateSettings({ contentWidth })}
      >
        <TextEditor
          style={{
            height: "100%",
            overflow: "auto"
          }}
          {...props}
        />
      </Resizable>
    </Row>
  );
};
