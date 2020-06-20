import React from "react";
import { Row, FlexProps, Main } from "@mpkelly/siam";
import { JournalHelp } from "../help/Help";

export interface PageProps extends FlexProps {}

export const Page = (props: PageProps) => {
  const { children, location, match, ...rest } = props;
  return (
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
      <JournalHelp />
    </Main>
  );
};
