import React from "react";
import { Text, Label, Icon, FlexProps, Section, Show } from "@mpkelly/siam";
import { Logo } from "../../components/logo/Logo";
import { useSettings } from "../settings/SettingsContext";

export interface NavigationHeaderProps extends FlexProps {
  collapsed: boolean;
  onToggleCollapsed(): void;
}

export const NavigationHeader = (props: NavigationHeaderProps) => {
  const { collapsed, onToggleCollapsed } = props;
  const { settings } = useSettings();
  return (
    <Section
      flexDirection="row"
      mb="md"
      px="lg"
      height={40}
      gravity={"center-start"}
    >
      <Logo />
      <Text ml="md" kind="large">
        {settings.siteName}
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
          onClick={onToggleCollapsed}
        />
      </Show>
    </Section>
  );
};
