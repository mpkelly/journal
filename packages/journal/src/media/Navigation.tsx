import React from "react";
import { Nav, TabBar } from "udx-react";
import { Tabs, useMedia } from "./MediaContext";
import { Tags } from "../tags/Tags";

export const Navigation = () => {
  const { tabIndex, handleTabChange } = useMedia();
  return (
    <Nav flexDirection="column" pr="lg" minWidth={180}>
      <TabBar
        flexDirection={"column"}
        tabs={Tabs}
        selectedTabIndex={tabIndex}
        onTabChange={handleTabChange}
      />
      <Tags mt="lg" width={"100%"} />
    </Nav>
  );
};
