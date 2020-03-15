import React, { memo } from "react";
import { Page } from "../page/Page";
import { Column, H1, Row, Button } from "udx-react";
import { Panel } from "../panel/Panel";
import { Setting } from "./Setting";
import { useSettings } from "./SettingsContext";

export interface SettingsPageProps {}

export const SettingsPage = memo(() => {
  const {
    settings,
    updateSettings,
    handleExport,
    handleImportRef,
    handleImport,
    handleImportFile
  } = useSettings();

  return (
    <Page>
      <Column p="lg" flexGrow={1}>
        <H1 labelKey="settings" />
        <Row flexGrow={1}>
          <Panel flexGrow={1} height={"100%"} flexDirection={"column"}>
            <Setting
              label="wikiName"
              value={settings.wikiName}
              onChange={(wikiName: string) => updateSettings({ wikiName })}
              description={"wikiNameDescription"}
            />
            <input
              type="file"
              hidden
              ref={handleImportRef}
              onChange={handleImportFile}
            />
            <Row mt="xl">
              <Button
                onClick={handleExport}
                labelKey="exportData"
                variant="muted"
              />
              <Button
                onClick={handleImport}
                labelKey="importData"
                ml="md"
                variant="muted"
              />
            </Row>
          </Panel>
        </Row>
      </Column>
    </Page>
  );
});
