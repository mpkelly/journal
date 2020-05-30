import React from "react";
import { Button, Row, Show } from "@mpkelly/siam";
import { HelpState, useHelpState } from "../../components/help/HelpProvider";

export const HelpToolbar = () => {
  const {
    handleNext,
    handleSkip,
    hasNext,
    hasPrevious,
    handlePrevious,
  } = useHelpState() as HelpState;
  return (
    <Row mt="lg">
      <Button kind="text" labelKey="skip" onClick={handleSkip} />
      <Row gravity="center-start" ml="auto">
        <Show when={hasPrevious}>
          <Button
            kind="text"
            labelKey="back"
            onClick={handlePrevious}
            mr="md"
          />
        </Show>
        <Button labelKey={hasNext ? "next" : "done"} onClick={handleNext} />
      </Row>
    </Row>
  );
};
