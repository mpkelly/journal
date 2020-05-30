import React from "react";
import { FlexProps } from "@mpkelly/siam";
import { Dialog } from "../../components/dialog/Dialog";
import { HelpTab } from "../../components/help/Help";
import { Help } from "../../components/help/Help";
import { HelpCollectionsCard } from "./HelpCollectionsCard";
import { HelpDocumentEditorCard } from "./HelpDocumentEditorCard";

export interface JournalHelpProps extends FlexProps {}

export const JournalHelp = (props: JournalHelpProps) => {
  return (
    <Dialog
      width="auto"
      minHeight={500}
      onClickOutside={console.log}
      mt="xxl"
      p={"md"}
    >
      <Help
        playbackRate={2}
        width={620}
        tabs={HelpTabs}
        onComplete={console.log}
      />
    </Dialog>
  );
};

const HelpTabs: HelpTab[] = [
  { url: "./help-videos/addcollection.webm", content: <HelpCollectionsCard /> },
  {
    url: "./help-videos/editor.webm",
    content: <HelpDocumentEditorCard />,
  },
];
