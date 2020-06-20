import React from "react";
import { FlexProps } from "@mpkelly/siam";
import { Dialog } from "../../components/dialog/Dialog";
import { HelpCreateDocumentTab } from "./HelpCreateDocumentTab";
import { VideoIntro, VideoIntroTab } from "@mpkelly/react-video-intro";
import { HelpIntroTab } from "./HelpIntroTab";
import { useSettings } from "../settings/SettingsContext";
import { HelpCreateWikiPageTab } from "./HelpCreateWikiPageTab";
import { HelpCreateTemplateTab } from "./HelpCreateTemplateTab";
import { HelpCreateStyleSheetsTab } from "./HelpCreateStyleSheetsTab";
import { HelpInsertImages } from "./HelpInsertImages";

export interface JournalHelpProps extends FlexProps {}

export const JournalHelp = () => {
  const { settings, handleSettingsChange } = useSettings();

  const handleHideHelp = () => {
    handleSettingsChange({ showHelp: false });
  };

  if (!settings.showHelp) {
    return null;
  }
  return (
    <Dialog
      width="auto"
      minHeight={500}
      onClickOutside={console.log}
      mt="xxl"
      p={"md"}
    >
      <VideoIntro
        playbackRate={2}
        width={540}
        videoHeight={334}
        tabs={HelpTabs}
        onComplete={handleHideHelp}
        showControls
      />
    </Dialog>
  );
};

const HelpTabs: VideoIntroTab[] = [
  HelpIntroTab,
  HelpCreateDocumentTab,
  HelpCreateStyleSheetsTab,
  HelpCreateTemplateTab,
  HelpInsertImages,
  HelpCreateWikiPageTab,
];
