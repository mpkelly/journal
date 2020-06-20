import React from "react";
import { Icon, FlexProps, Row, Text } from "@mpkelly/siam";
import { PageTitle } from "../../components/page-title/PageTitle";
import { useSettings } from "./SettingsContext";

export interface SettingsPageHeaderProps extends FlexProps {}

export const SettingsPageHeader = () => {
  const { settings, handleSettingsChange } = useSettings();
  const showIntro = () => {
    handleSettingsChange({ ...settings, showHelp: true });
  };
  return (
    <Row gravity="center-start">
      <PageTitle labelKey="settings" iconName="settings" mr="auto" />

      <Row gravity="center-start">
        <Text
          kind="small"
          color="secondary.text"
          labelKey="replayIntro"
          cursor="pointer"
          mr="lg"
          onClick={showIntro}
          hoverOpacity={0.8}
        />
        <a
          href={"https://github.com/mpkelly/Journal/wiki"}
          target="_blank"
          style={{ textDecoration: "none" }}
        >
          <Icon name="help" kind="button" />
        </a>
      </Row>
    </Row>
  );
};
