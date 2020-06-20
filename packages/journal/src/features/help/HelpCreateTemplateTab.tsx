import React from "react";
import { Text, Column, Row } from "@mpkelly/siam";
import { HelpToolbar } from "./HelpToolbar";
import { HelpPageIndicator } from "./HelpPageIndicator";
import { DriverProgram, VideoIntroTab } from "@mpkelly/react-video-intro";

const Card = () => {
  return (
    <Column p="md" height={175}>
      <Row gravity="center-start">
        <Text kind="large" fontWeight="bold" mb="md">
          Create templates to save time
        </Text>
        <HelpPageIndicator />
      </Row>
      <Text color="secondary.text" mb="md">
        You can create and save templates from your document files. These
        templates can include placeholders and variables that easily allow to
        customise the output for a given context.
      </Text>
      <HelpToolbar />
    </Column>
  );
};

const Program: DriverProgram = {
  steps: [
    {
      start: 0,
      end: 10,
      transformOrigin: "left top",
      scale: 2,
      playbackRate: 2,
    },
    {
      start: 10,
      end: 15,
      transformOrigin: "right top",
      scale: 2,
      transition: "all 1s",
    },
    {
      start: 15,
      end: 22,
      transformOrigin: "center",
      scale: 2,
      transition: "all 1s",
    },
    {
      start: 22,
      transformOrigin: "center",
      scale: 1.5,
      transition: "all 1s",
    },
  ],
};

export const HelpCreateTemplateTab: VideoIntroTab = {
  url: "./help/create-template.webm",
  content: <Card />,
  program: Program,
};
