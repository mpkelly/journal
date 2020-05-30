import React, { ReactNode, CSSProperties } from "react";
import { HelpCard } from "./HelpCard";
import { HelpProvider } from "./HelpProvider";

export interface HelpProps {
  playbackRate?: number;
  tabs: HelpTab[];
  onComplete(): void;
  onSkipped?(): void;
  width?: number | string;
  height?: number | string;
  style?: CSSProperties;
  videoHeight?: number | string;
  videoWidth?: number | string;
}

export interface HelpTab {
  url: string;
  content?: ReactNode;
}

export const Help = (props: HelpProps) => {
  return (
    <HelpProvider {...props}>
      <HelpCard />
    </HelpProvider>
  );
};
