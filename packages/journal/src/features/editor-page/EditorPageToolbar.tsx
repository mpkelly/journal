import React, { Fragment } from "react";
import { Icon, FlexProps, Column } from "@mpkelly/siam";
import { useEditorSideTabState } from "./EditorPageState";
import { SideTab } from "./EditorSideTabState";
import useBoolean from "react-hanger/useBoolean";
import { EditorPageHelpKeyShortcutDialog } from "./EditorPageHelpKeyShortcutDialog";
import { Help } from "../../components/help/Help";
import { Show } from "../../util/Show";

export const EditorPageToolbar = (props: FlexProps) => {
  const { handleSideTabChange, sideTab } = useEditorSideTabState();
  const showHelp = useBoolean(false);
  return (
    <Fragment>
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
          data-test="template-tab"
        />
        <SideTabIcon
          selectedTab={sideTab}
          sideTab={SideTab.Code}
          onClick={showHelp.toggle}
          iconName="help"
          mt="auto"
          data-test="help-button"
        />
      </Column>
      <Show when={showHelp.value}>
        <EditorPageHelpKeyShortcutDialog onClose={showHelp.toggle} />
      </Show>
    </Fragment>
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
