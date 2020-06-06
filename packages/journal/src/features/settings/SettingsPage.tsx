import React, { memo } from "react";
import { Page } from "../page/Page";
import { Row, Button, Show, Text, Icon } from "@mpkelly/siam";
import { Setting } from "./Setting";
import { useSettings } from "./SettingsContext";
import { PageTitle } from "../../components/page-title/PageTitle";
import { Dropzone } from "../../components/dropzone/Dropzone";
import { SettingsConfirmImportDialog } from "./SettingsConfirmImportDialog";
import { Link } from "../../components/link/Link";

export interface SettingsPageProps {}

export const SettingsPage = memo(() => {
  const {
    settings,
    handleSettingsChange: updateSettings,
    handleExport,
    handleImportRef,
    handleImport,
    handleImportFile,
    handleFile,
    handleConfirmImport,
    handleCancelImport,
    showImportDialog,
  } = useSettings();

  return (
    <Dropzone
      width="100%"
      maxHeight="100vh"
      height="100vh"
      handleFiles={(files) => handleFile(files[0])}
      overflow="hidden"
      data-backup-dropzone
    >
      <Page flexGrow={1}>
        <Row gravity="center-start">
          <PageTitle labelKey="settings" iconName="settings" mr="auto" />
          <a
            href={"https://github.com/mpkelly/Journal/wiki"}
            target="_blank"
            style={{ textDecoration: "none" }}
          >
            <Icon name="help" kind="button" />
          </a>
        </Row>
        <Setting
          mt="lg"
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
        <Text
          mt="sm"
          kind="small"
          color="secondary.text"
          labelKey="uploadOrDropJbf"
        />
        <Show when={showImportDialog}>
          <SettingsConfirmImportDialog
            onConfirm={handleConfirmImport}
            onCancel={handleCancelImport}
          />
        </Show>
      </Page>
    </Dropzone>
  );
});
