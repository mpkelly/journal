import * as React from "react";
import { Siam } from "@mpkelly/siam";
import { Router } from "./routing/Router";
import { Style } from "./ui-system/Style";
import { FileUpload } from "./upload/FileUpload";
import { SettingsProvider } from "./settings/SettingsContext";
import { SiamSystem } from "./ui-system/SiamSystem";

export const Journal = () => {
  return (
    <Siam system={SiamSystem}>
      <SettingsProvider>
        <Style />
        <Router />
        <FileUpload />
      </SettingsProvider>
    </Siam>
  );
};
