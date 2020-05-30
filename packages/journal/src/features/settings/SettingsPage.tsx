import React, { memo } from "react";
import { Page } from "../page/Page";
import { Row, Button, Column } from "@mpkelly/siam";
import { Setting } from "./Setting";
import { useSettings } from "./SettingsContext";
import { PageTitle } from "../../components/page-title/PageTitle";

export interface SettingsPageProps {}

export const SettingsPage = memo(() => {
  const {
    settings,
    handleSettingsChange: updateSettings,
    handleExport,
    handleImportRef,
    handleImport,
    handleImportFile,
  } = useSettings();

  return (
    <Page flexGrow={1}>
      <PageTitle labelKey="settings" iconName="settings" />
      <Column flexGrow={1} py="lg">
        <Setting
          label="siteName"
          value={settings.siteName}
          onChange={(siteName: string) => updateSettings({ siteName })}
          description={""}
        />
        <input
          type="file"
          hidden
          ref={handleImportRef}
          onChange={handleImportFile}
        />
        <Row mt="xl">
          <Button onClick={handleExport} labelKey="exportData" kind="muted" />
          <Button
            onClick={handleImport}
            labelKey="importData"
            ml="md"
            kind="muted"
          />
        </Row>
      </Column>
    </Page>
  );
});
