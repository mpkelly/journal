import React from "react";
import {
  Column,
  Text,
  FlexProps,
  Row,
  Nav,
  Section,
  Badge,
  Label
} from "udx-react";
import { Logo } from "../logo/Logo";
import { Collections } from "../collections/Collections";
import { CollectionsProvider } from "../collections/CollectionContext";
import { SettingsNav } from "../settings/SettingsNav";
import { MediaNavItems } from "../media/MediaNavItems";
import { useSettings } from "../settings/SettingsContext";

export interface NavigationProps extends FlexProps {}

export const Navigation = (props: NavigationProps) => {
  const { ...rest } = props;
  const { settings } = useSettings();
  return (
    <Nav
      py={"md"}
      flexDirection={"column"}
      borderRight="1px solid dividers"
      {...rest}
    >
      <Section alignItems="center" mb="md" px="lg" height={40}>
        <Logo />
        <Text ml="lg" variant="large" color="nav_primaryText">
          {settings.wikiName}
        </Text>
        <Label variant="danger" ml="auto">
          BETA
        </Label>
      </Section>
      <Column flex={1} height={0}>
        <Section flexDirection={"column"} flexGrow={1} overflowY="hidden">
          <CollectionsProvider>
            <Collections />
          </CollectionsProvider>
        </Section>
        <Section flexDirection={"column"} mt="xl" flex="none">
          <Text
            variant="label"
            labelKey="media"
            color="nav_secondaryText"
            mb="lg"
            px="lg"
          />
          <MediaNavItems />
        </Section>
        <Section mt="xl" flex="none" flexDirection={"column"}>
          <Text
            mx="lg"
            variant="label"
            labelKey="settings"
            color="nav_secondaryText"
            mb="md"
          />
          <SettingsNav />
        </Section>
      </Column>
    </Nav>
  );
};
