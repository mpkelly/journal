import React from "react";
import { Row } from "@mpkelly/siam";
import { SideTab } from "./EditorSideTabState";
import { EditorPageCodeTab } from "./EditorPageCodeTab";
import { EditorPageOutlineTab } from "./EditorPageOutlineTab";
import { EditorPageTemplatesTab } from "./EditorPageTemplatesTab";
import { useEditorState, useEditorSideTabState } from "./EditorPageState";
import { EditorPageImageTab } from "./EditorPageImageTab";

export const EditorPageSideTab = () => {
  const { file } = useEditorState();
  const { sideTab } = useEditorSideTabState();

  const renderTab = () => {
    switch (sideTab) {
      case SideTab.Outline:
        return {
          width: 300,
          content: <EditorPageOutlineTab value={file.data} width={300} />,
        };
      case SideTab.Templates:
        return {
          width: 300,
          content: <EditorPageTemplatesTab width={300} file={file} />,
        };
      case SideTab.Code:
        return {
          width: 600,
          content: <EditorPageCodeTab flex="1 1 0" width="100%" />,
        };
      case SideTab.Image:
        return { width: 300, content: <EditorPageImageTab width={400} /> };
      default:
        return { width: 0, content: null };
    }
  };
  const { width, content } = renderTab();
  return (
    <Row height="100%" maxWidth="50vw" width={width} transition="width .2s">
      {content}
    </Row>
  );
};
