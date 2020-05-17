import React from "react";
import { Page } from "../page/Page";
import { Column, Row } from "@mpkelly/siam";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { TagProvider } from "../tags/TagContext";
import { Toolbar } from "./Toolbar";
import { MediaGrid } from "./MediaGrid";
import { MediaProvider } from "./MediaContext";
import { Navigation } from "./Navigation";

export interface MediaPageProps extends RouteComponentProps {}

export const MediaPage = withRouter((props: MediaPageProps) => {
  return (
    <TagProvider>
      <MediaProvider {...props}>
        <Page>
          <Column p="lg" flexGrow={1} overflowY={"hidden"}>
            <Toolbar />
            <Row flexGrow={1} overflowY={"hidden"} pl={3}>
              <Navigation />
              <MediaGrid />
            </Row>
          </Column>
        </Page>
      </MediaProvider>
    </TagProvider>
  );
});
