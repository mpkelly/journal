import React from "react";
import { Icon, FlexProps, Column } from "@mpkelly/siam";
import { useEditorSideTabState } from "./EditorPageState";
import { SideTab } from "./EditorSideTabState";

export const EditorPageToolbar = (props: FlexProps) => {
  const { handleSideTabChange, sideTab } = useEditorSideTabState();
  return (
    <Column
      pt="md"
      gravity={"top-center"}
      backgroundColor="background"
      borderLeft="1px solid dividers"
      {...props}
    >
      <SideTabIcon
        selectedTab={sideTab}
        sideTab={SideTab.Outline}
        onClick={handleSideTabChange}
        iconName="outline"
      />
      <SideTabIcon
        selectedTab={sideTab}
        sideTab={SideTab.Image}
        onClick={handleSideTabChange}
        iconName="images"
      />
      <SideTabIcon
        selectedTab={sideTab}
        sideTab={SideTab.Code}
        onClick={handleSideTabChange}
        iconName="code"
      />
      <SideTabIcon
        selectedTab={sideTab}
        sideTab={SideTab.Templates}
        onClick={handleSideTabChange}
        iconName="template"
      />
      <SideTabIcon
        selectedTab={sideTab}
        sideTab={SideTab.Code}
        onClick={handleSideTabChange}
        iconName="help"
        mt="auto"
      />
    </Column>
  );
};

interface SideTabIconProps extends FlexProps {
  onClick(sideTab: SideTab): void;
  sideTab: SideTab;
  selectedTab: SideTab | undefined;
  iconName: string;
}

const SideTabIcon = (props: SideTabIconProps) => {
  const { sideTab, selectedTab, onClick, iconName, ...rest } = props;
  return (
    <Icon
      my="md"
      selectedColor="accent"
      selected={sideTab === selectedTab}
      name={iconName}
      kind="button"
      onClick={() => onClick(sideTab)}
      {...rest}
    />
  );
};
