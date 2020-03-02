import React from "react";
import { Row, FlexProps, Main } from "udx-react";
import { Navigation } from "../navigation/Navigation";

export interface PageProps extends FlexProps {}

export const Page = (props: PageProps) => {
  const { children, ...rest } = props;
  return (
    <Row width={"100vw"} height={"100vh"} overflow={"hidden"} {...rest}>
      <Navigation
        flexShrink={0}
        width={280}
        height={"100vh"}
        maxHeight="100vh"
        backgroundColor="nav_background"
      />
      <Main
        flexDirection={"column"}
        flexGrow={1}
        height={"100vh"}
        backgroundColor={"background"}
        overflow={"hidden"}
      >
        {children}
      </Main>
    </Row>
  );
};
