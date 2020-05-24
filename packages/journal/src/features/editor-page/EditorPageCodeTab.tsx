import React from "react";
import { FlexProps, Column } from "@mpkelly/siam";
import { CodeEditor } from "../code-editor/CodeEditor";

export const EditorPageCodeTab = (props: FlexProps) => {
  const { ...rest } = props;
  return (
    <Column {...rest}>
      <CodeEditor size="100%" />
    </Column>
  );
};
