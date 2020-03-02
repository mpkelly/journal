import React from "react";
import { Editor as TextEditor } from "@mpkelly/react-editor-kit";
import { useSettings } from "../settings/SettingsContext";
import { Node } from "slate";

export interface EditorProps {
  readOnly?: boolean;
  onChange(value: Node[]): void;
  value: Node[];
}

export const Editor = (props: EditorProps) => {
  const placeholder = props.readOnly ? undefined : "Write something...";
  const { settings } = useSettings();
  return (
    <TextEditor
      style={{
        width: settings.contentWidth,
        height: "100%",
        overflow: "auto"
      }}
      spellCheck={false}
      {...props}
    />
  );
};
