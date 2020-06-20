import React from "react";
import { Text, Column, Row } from "@mpkelly/siam";
import { HelpToolbar } from "./HelpToolbar";
import { HelpPageIndicator } from "./HelpPageIndicator";
import { DriverProgram, VideoIntroTab } from "@mpkelly/react-video-intro";
import { Logo } from "../../components/logo/Logo";

const Splash = () => {
  return (
    <Column
      p="md"
      width="100%"
      height={"calc(100% + 3px)"}
      gravity="center"
      backgroundColor="background-light1"
      borderBottom="1px solid dividers"
    >
      <Row gravity="center-start" transform={"scale(3)"}>
        <Logo />
        <Text kind="xlarge" labelKey="journal" ml="md" />
      </Row>
    </Column>
  );
};

export const Card = () => {
  return (
    <Column p="md" height={175}>
      <Row gravity="center-start">
        <Text kind="large" fontWeight="bold" mb="md">
          Welcome to Journal
        </Text>
        <HelpPageIndicator />
      </Row>
      <Text color="secondary.text">
        Please read through the following slides to familiarise yourself with
        some of Journal's features.
      </Text>
      <HelpToolbar />
    </Column>
  );
};

const Program: DriverProgram = {
  steps: [
    {
      start: 0,
      end: 0.9,
      transformOrigin: "left top",
      scale: 2,
      playbackRate: 0,
      component: <Splash />,
    },
  ],
};

export const HelpIntroTab: VideoIntroTab = {
  content: <Card />,
  program: Program,
};
