import React, { useState } from "react";
import {
  Column,
  Text,
  FlexProps,
  Nav,
  Section,
  Label,
  Scope,
  Icon,
  Show,
} from "@mpkelly/siam";
import { Logo } from "../../components/logo/Logo";
import { SettingsNav } from "../settings/SettingsNav";
import { MediaNavItemsView } from "../media/MediaNavItemsView";
import { useSettings } from "../settings/SettingsContext";
import { CollectionsPageNavItems } from "../collection-page/CollectionsPageNavItems";
import { CodePageNavItem } from "../code-page/CodePageNavItem";
import { CollectionsTreeStateProvider } from "../collection-page/CollectionsPageState";

export interface NavigationProps extends FlexProps {}

export const Navigation = (props: NavigationProps) => {
  const { ...rest } = props;
  const { settings } = useSettings();
  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapsed = () => setCollapsed((collapsed) => !collapsed);
  return (
    <Scope value="nav">
      <Nav
        py={"md"}
        borderRight="1px solid dividers"
        backgroundColor="background"
        overflow={!collapsed ? "hidden" : ""}
        position="relative"
        flexShrink={0}
        ml={collapsed ? -280 : 0}
        transition="all .4s"
        {...rest}
      >
        <Section
          flexDirection="row"
          mb="md"
          px="lg"
          height={40}
          gravity={"center-start"}
        >
          <Logo />
          <Text ml="md" kind="large">
            {settings.wikiName}
          </Text>
          <Label kind="beta" ml="md">
            BETA
          </Label>
          <Show when={!collapsed}>
            <Icon
              kind="small.button"
              name="clear"
              color="secondary.text"
              ml="auto"
              onClick={toggleCollapsed}
            />
          </Show>
        </Section>
        <Column flexGrow={1} flexShrink={1} overflow="hidden" mt="lg">
          <CollectionsTreeStateProvider>
            <CollectionsPageNavItems />
          </CollectionsTreeStateProvider>
          <CodePageNavItem />
          <MediaNavItemsView />
          <SettingsNav mt="auto" />
        </Column>
        <Show when={collapsed}>
          <Icon
            kind="button"
            name="menu"
            position="absolute"
            right={-40}
            bottom={16}
            onClick={toggleCollapsed}
            backgroundColor="background-dark1"
            zIndex="dialogs"
          />
        </Show>
      </Nav>
    </Scope>
  );
};
