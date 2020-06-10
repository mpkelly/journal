import { useState } from "react";

export type EditorSideTabState = {
  sideTab: SideTab | undefined;
  handleSideTabChange(sideTab: SideTab): void;
};

export enum SideTab {
  Outline,
  Code,
  Templates,
  Image,
  Help,
}

export const useEditorSideTabState = (): EditorSideTabState => {
  const [sideTab, setSideTab] = useState<SideTab | undefined>();

  const handleSideTabChange = (sideTab: SideTab) => {
    setSideTab((current) => (current === sideTab ? undefined : sideTab));
  };

  return {
    sideTab,
    handleSideTabChange,
  };
};
