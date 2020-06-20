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
          Easily embed images
        </Text>
        <HelpPageIndicator />
      </Row>
      <Text color="secondary.text" mb="md">
        You can easily drag and drop library images into your documents. You can
        then use CSS to adjust the image style and size.
      </Text>
      <HelpToolbar />
    </Column>
  );
};

const Program: DriverProgram = {
  steps: [
    {
      start: 0,
      end: 6,
      transformOrigin: "right top",
      scale: 2,
      playbackRate: 2,
    },
    {
      start: 6,
      transformOrigin: "center",
      scale: 1,
      transition: "all 1s",
    },
  ],
};

export const HelpInsertImages: VideoIntroTab = {
  url: "./help/insert-images.webm",
  content: <Card />,
  program: Program,
};
