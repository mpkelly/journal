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
          Create and orgranise document
        </Text>
        <HelpPageIndicator />
      </Row>
      <Text color="secondary.text" mb="md">
        Journal allows you to create new text documents which can be styled and
        printed as you like. You can store documents in Collections which are
        top-level folders.
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
      end: 14,
      transformOrigin: "right top",
      scale: 2,
      transition: "all 1s",
    },
    {
      start: 14,
      end: 22,
      transformOrigin: "left top",
      scale: 2,
      transition: "all 1s",
    },
    {
      start: 22,
      transformOrigin: "center",
      scale: 1,
      transition: "all 1s",
    },
  ],
};

export const HelpCreateDocumentTab: VideoIntroTab = {
  url: "./help/create-document.webm",
  content: <Card />,
  program: Program,
};
