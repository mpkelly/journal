import React from "react";
import { Text, Column, Row } from "@mpkelly/siam";
import { HelpToolbar } from "./HelpToolbar";
import { HelpPageIndicator } from "./HelpPageIndicator";
import { DriverProgram, VideoIntroTab } from "@mpkelly/react-video-intro";

export const Card = () => {
  return (
    <Column p="md" height={175}>
      <Row gravity="center-start">
        <Text kind="large" fontWeight="bold" mb="md">
          Style your documents with CSS
        </Text>
        <HelpPageIndicator />
      </Row>
      <Text color="secondary.text" mb="md">
        You can use any valid CSS to style your documents including CSS
        Variables and nested CSS Selectors. You can link style sheets to
        specific documents or set them as defaults to be applied to all
        documents.
      </Text>
      <HelpToolbar />
    </Column>
  );
};

const Program: DriverProgram = {
  steps: [
    {
      start: 0,
      end: 8,
      transformOrigin: "right top",
      scale: 2,
      playbackRate: 2,
    },
    {
      start: 8,
      end: 12,
      transformOrigin: "right bottom",
      scale: 2,
    },
    {
      start: 12,
      transformOrigin: "right top",
      scale: 1.4,
    },
  ],
};

export const HelpCreateStyleSheetsTab: VideoIntroTab = {
  url: "./help/create-style-sheets.webm",
  content: <Card />,
  program: Program,
};
