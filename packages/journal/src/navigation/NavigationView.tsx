import React from "react";
import {
  Column,
  Text,
  FlexProps,
  Nav,
  Section,
  Label,
  Scope,
  Row,
  Icon,
} from "@mpkelly/siam";
import { Logo } from "../logo/Logo";
import { SettingsNav } from "../settings/SettingsNav";
import { MediaNavItemsView } from "../media/MediaNavItemsView";
import { useSettings } from "../settings/SettingsContext";
import { CollectionNavItemsView } from "../collections-tree/CollectionNavItemsView";
import { CollectionsTreeProvider } from "../collections-tree/CollectionTreeContext";

export interface NavigationViewProps extends FlexProps {}

export const NavigationView = (props: NavigationViewProps) => {
  const { ...rest } = props;
  const { settings } = useSettings();
  return (
    <Scope value="nav">
      <Nav
        py={"md"}
        borderRight="1px solid dividers"
        backgroundColor="background"
        overflow="hidden"
        flexShrink={0}
        {...rest}
      >
        <Section
          flexDirection="row"
          mb="md"
          px="lg"
          height={40}
          gravity={"center"}
        >
          <Logo />
          <Text ml="lg" kind="large">
            {settings.wikiName}
          </Text>
          <Label kind="beta" ml="auto">
            BETA
          </Label>
        </Section>
        <Column flexGrow={1} flexShrink={1} overflow="hidden" mt="lg">
          <CollectionsTreeProvider>
            <CollectionNavItemsView />
          </CollectionsTreeProvider>
          <MediaNavItemsView />
          <SettingsNav mt="auto" />
        </Column>
      </Nav>
    </Scope>
  );
};
