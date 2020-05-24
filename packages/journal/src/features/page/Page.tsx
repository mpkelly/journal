import React from "react";
import { Row, FlexProps, Main } from "@mpkelly/siam";
import { Navigation } from "../navigation/Navigation";

export interface PageProps extends FlexProps {}

export const Page = (props: PageProps) => {
  const { children, location, match, ...rest } = props;
  return (
    <Row width={"100vw"} height={"100vh"} overflow={"hidden"}>
      <Navigation width={280} height={"100vh"} maxHeight="100vh" />
      <Main
        flexDirection={"column"}
        flexGrow={1}
        height={"100vh"}
        backgroundColor={"background"}
        overflow={"hidden"}
        p="lg"
        {...rest}
      >
        {children}
      </Main>
    </Row>
  );
};
