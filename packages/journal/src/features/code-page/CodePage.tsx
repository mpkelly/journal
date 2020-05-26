import React, { Fragment } from "react";
import { FlexProps, Column } from "@mpkelly/siam";
import { Page } from "../page/Page";
import { PageTitle } from "../../components/page-title/PageTitle";
import { CodePageStateProvider } from "./CodePageState";
import { CodePageTable } from "./CodePageTable";

export interface CodePageProps extends FlexProps {}

export const CodePage = () => {
  return (
    <CodePageStateProvider>
      <Fragment>
        <Page position="relative" overflow="hidden">
          <Column size="100%" p="lg">
            <PageTitle iconName="code" labelKey="code" />
            <CodePageTable flexGrow={1} />
          </Column>
        </Page>
      </Fragment>
    </CodePageStateProvider>
  );
};
