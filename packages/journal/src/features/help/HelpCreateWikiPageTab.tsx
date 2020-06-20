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
          Create Wiki-style pages
        </Text>
        <HelpPageIndicator />
      </Row>
      <Text color="secondary.text" mb="md">
        Wiki Pages are great for todo lists and video content. Use them to keep
        notes for your next online course or track progress on your side
        project.
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
      end: 15,
      transformOrigin: "left top",
      scale: 2,
      transition: "all 1s",
      playbackRate: 2,
    },
    {
      start: 15,
      transformOrigin: "center",
      scale: 1,
      transition: "all 1s",
      playbackRate: 2,
    },
  ],
};

export const HelpCreateWikiPageTab: VideoIntroTab = {
  url: "./help/create-wiki-page.webm",
  content: <Card />,
  program: Program,
};
