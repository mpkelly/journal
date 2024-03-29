import React from "react";
import { Column, FlexProps, Nav, Scope, Icon, Show } from "@mpkelly/siam";
import { SettingsNav } from "../settings/SettingsNav";
import { MediaNavItems } from "../media/MediaNavItems";
import { CollectionsPageNavItems } from "../collection-page/CollectionsPageNavItems";
import { CodePageNavItem } from "../code-page/CodePageNavItem";
import { CollectionsTreeStateProvider } from "../collection-page/CollectionsPageState";
import { NavigationHeader } from "./NavigationHeader";
import useBoolean from "react-hanger/useBoolean";

export interface NavigationProps extends FlexProps {}

export const Navigation = (props: NavigationProps) => {
  const { ...rest } = props;
  const collapsed = useBoolean(false);
  return (
    <Nav
      py={"md"}
      borderRight="1px solid dividers"
      backgroundColor="background"
      overflow={!collapsed ? "hidden" : ""}
      position="relative"
      flexShrink={0}
      ml={collapsed.value ? -280 : 0}
      transition="all .2s"
      {...rest}
    >
      <NavigationHeader
        collapsed={collapsed.value}
        onToggleCollapsed={collapsed.toggle}
      />
      <Column flexGrow={1} flexShrink={1} overflow="hidden" mt="lg">
        <CollectionsTreeStateProvider>
          <CollectionsPageNavItems />
        </CollectionsTreeStateProvider>
        <CodePageNavItem />
        <MediaNavItems />
        <SettingsNav mt="auto" />
      </Column>
      <Show when={collapsed.value}>
        <Scope value="dark">
          <Icon
            kind="button"
            name="menu"
            position="absolute"
            right={-50}
            bottom={16}
            onClick={collapsed.toggle}
            backgroundColor="background"
            zIndex="dialogs"
          />
        </Scope>
      </Show>
    </Nav>
  );
};
