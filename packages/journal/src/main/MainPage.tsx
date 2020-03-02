import React from "react";
import { Page } from "../page/Page";

import { Item } from "../content/Item";
import { H1 } from "udx-react";

export interface MainPageProps {
  item: Item;
}

export const MainPage = (props: MainPageProps) => {
  return (
    <Page>
      <H1>Hello, wolrd</H1>
    </Page>
  );
};
