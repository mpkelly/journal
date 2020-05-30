import React from "react";
import { Text, Column, Row } from "@mpkelly/siam";
import { HelpToolbar } from "./HelpToolbar";
import { HelpPageIndicator } from "./HelpPageIndicator";

//Chrome tab should be resized to 970px x 670px
export const HelpDocumentEditorCard = () => {
  return (
    <Column p="md">
      <Row gravity="center-start">
        <Text kind="large" fontWeight="bold" mb="md">
          Powerful Editor for authors
        </Text>
        <HelpPageIndicator />
      </Row>
      <Text color="secondary.text" mb="md">
        Organise your documents and notes into collections and sub folders.
        Easily drag, drop and rearange your content. Organise your documents and
        notes into collections and sub folders.
      </Text>
      <HelpToolbar />
    </Column>
  );
};
