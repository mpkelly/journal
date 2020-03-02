import * as React from "react";
import { SystemProvider } from "udx-react";
import { StyleSystem } from "./style/StyleSystem";
import { Router } from "./routing/Router";
import { Style } from "./style/Style";
import { FileUpload } from "./upload/FileUpload";
import { SettingsProvider } from "./settings/SettingsContext";

export const Journal = () => {
  return (
    <SystemProvider system={StyleSystem}>
      <SettingsProvider>
        <Style />
        <Router />
        <FileUpload />
      </SettingsProvider>
    </SystemProvider>
  );
};
