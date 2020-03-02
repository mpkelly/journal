import React from "react";
import { Paragraph, Text } from "udx-react";
import { Panel } from "../panel/Panel";
import { MediaItemProps } from "./MediaItemProps";
import { getDomain } from "../util/Urls";

export const TextItem = (props: MediaItemProps) => {
  const { media, ...rest } = props;
  const text = media.content;
  return (
    <Panel flexDirection="column" m="md" p={0} {...rest}>
      <Paragraph variant={"large"} m={0}>
        {text}
      </Paragraph>
    </Panel>
  );
};
