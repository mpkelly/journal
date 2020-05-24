import * as React from "react";
import { Siam } from "@mpkelly/siam";
import { Router } from "./features/routing/Router";
import { Style } from "./ui-system/Style";
import { FileUpload } from "./features/upload/FileUpload";
import { SettingsProvider } from "./features/settings/SettingsContext";
import { JournalSystem } from "./ui-system/System";

export const Journal = () => {
  return (
    <Siam system={JournalSystem}>
      <SettingsProvider>
        <Style />
        <Router />
        <FileUpload />
      </SettingsProvider>
    </Siam>
  );
};
