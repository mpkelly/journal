import React from "react";
import { Icon, FlexProps, Column } from "@mpkelly/siam";
import { useEditorSideTabState } from "./EditorPageState";
import { SideTab } from "./EditorSideTabState";

export const EditorPageToolbar = (props: FlexProps) => {
  const { handleSideTabChange } = useEditorSideTabState();
  return (
    <Column
      py="md"
      gravity={"top-center"}
      backgroundColor="background"
      borderLeft="1px solid dividers"
      {...props}
    >
      <Icon
        name="outline"
        kind="button"
        onClick={() => handleSideTabChange(SideTab.Outline)}
        my="md"
      />
      <Icon
        name="images"
        kind="button"
        onClick={() => handleSideTabChange(SideTab.Code)}
        my="md"
      />
      <Icon
        name="code"
        kind="button"
        onClick={() => handleSideTabChange(SideTab.Code)}
        my="md"
      />
      <Icon
        name="template"
        kind="button"
        onClick={() => handleSideTabChange(SideTab.Templates)}
        my="md"
      />
      <Icon
        mt="auto"
        name="help"
        kind="button"
        onClick={() => handleSideTabChange(SideTab.Code)}
      />
    </Column>
  );
};
