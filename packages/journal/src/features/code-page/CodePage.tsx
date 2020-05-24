import React from "react";
import { Text, FlexProps, Column } from "@mpkelly/siam";
import { Page } from "../page/Page";

export interface CodePageProps extends FlexProps {}

export const CodePage = (props: CodePageProps) => {
  return (
    <Page position="relative" overflow="hidden">
      <Column>
        <Text>Code Page</Text>
      </Column>
    </Page>
  );
};
