import React from "react";
import { Text } from "@mpkelly/siam";
import {
  VideoIntroState,
  useVideoIntroState,
} from "@mpkelly/react-video-intro";

export const HelpPageIndicator = () => {
  const { tabIndex, totalTabs } = useVideoIntroState() as VideoIntroState;
  return (
    <Text color="secondary.text" kind="small" ml="auto">
      {tabIndex}/{totalTabs}
    </Text>
  );
};
