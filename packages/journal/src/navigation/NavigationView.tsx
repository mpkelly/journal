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
        <Column flexGrow={1} overflow="hidden" mt="lg">
          <Section
            flexDirection={"column"}
            flexShrink={1}
            flexGrow={1}
            overflowY="hidden"
          >
            <Row gravity={"center-start"} mb="lg" px="lg">
              <Text
                kind="label"
                labelKey="library"
                color="secondary.text"
                data-id="library"
              />
              <Icon
                kind="button"
                name={"add"}
                size="small"
                ml="auto"
                // TODO onClick={addCollection}
                data-id="add-collection"
              />
            </Row>
            <CollectionNavItemsView />
          </Section>
          <Section flexDirection={"column"} mt="xl" flex="none">
            <Text
              kind="label"
              labelKey="media"
              color="secondary.text"
              mb="lg"
              px="lg"
              data-id="settings"
            />
            <MediaNavItemsView />
          </Section>
          <Section mt="xl" flex="none" flexDirection={"column"}>
            <Text
              mx="lg"
              kind="label"
              labelKey="settings"
              color="secondary.text"
              mb="md"
              data-id="settings"
            />
            <SettingsNav />
          </Section>
        </Column>
      </Nav>
    </Scope>
  );
};
