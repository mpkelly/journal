import React from "react";
import { FlexProps } from "@mpkelly/siam";
import { Page } from "../page/Page";
import { PageTitle } from "../../components/page-title/PageTitle";
import { CodePageStateProvider } from "./CodePageState";
import { CodePageTable } from "./CodePageTable";

export interface CodePageProps extends FlexProps {}

export const CodePage = () => {
  return (
    <CodePageStateProvider>
      <Page position="relative" overflow="hidden" p="lg">
        <PageTitle iconName="code" labelKey="code" />
        <CodePageTable flexGrow={1} />
      </Page>
    </CodePageStateProvider>
  );
};
