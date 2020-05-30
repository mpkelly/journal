import React from "react";
import { Text } from "@mpkelly/siam";
import { useHelpState, HelpState } from "../../components/help/HelpProvider";

export const HelpPageIndicator = () => {
  const { tabIndex, totalTabs } = useHelpState() as HelpState;
  return (
    <Text color="secondary.text" kind="small" ml="auto">
      {tabIndex}/{totalTabs}
    </Text>
  );
};
