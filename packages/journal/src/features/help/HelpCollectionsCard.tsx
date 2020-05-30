import React from "react";
import { Text, Column, Row } from "@mpkelly/siam";
import { HelpToolbar } from "./HelpToolbar";
import { HelpPageIndicator } from "./HelpPageIndicator";

//Chrome tab should be resized to 970px x 668px
export const HelpCollectionsCard = () => {
  return (
    <Column p="md">
      <Row gravity="center-start">
        <Text kind="large" fontWeight="bold" mb="md">
          Orangise your files into Collections
        </Text>
        <HelpPageIndicator />
      </Row>
      <Text color="secondary.text" mb="md">
        Organise your documents and notes into collections and sub folders.
        Easily drag, drop and rearange your content.
      </Text>
      <HelpToolbar />
    </Column>
  );
};
