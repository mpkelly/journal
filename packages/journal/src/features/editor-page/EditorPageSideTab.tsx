import React from "react";
import { SideTab } from "./EditorSideTabState";
import { EditorPageCodeTab } from "./EditorPageCodeTab";
import { EditorPageOutlineTab } from "./EditorPageOutlineTab";
import { EditorPageTemplatesTab } from "./EditorPageTemplatesTab";
import { useEditorState, useEditorSideTabState } from "./EditorPageState";
import { EditorPageImageTab } from "./EditorPageImageTab";

export const EditorPageSideTab = () => {
  const { file } = useEditorState();
  const { sideTab } = useEditorSideTabState();
  if (sideTab == undefined) {
    return null;
  }
  switch (sideTab) {
    case SideTab.Outline:
      return <EditorPageOutlineTab value={file.data} width={300} />;
    case SideTab.Templates:
      return <EditorPageTemplatesTab width={300} file={file} />;
    case SideTab.Code:
      return <EditorPageCodeTab flex="1 1 0" width="100%" />;
    case SideTab.Image:
      return <EditorPageImageTab width={400} />;
  }
};
