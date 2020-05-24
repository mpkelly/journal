import React from "react";
import { Text } from "@mpkelly/siam";
import { Panel } from "../../components/panel/Panel";
import { MediaItemProps } from "./MediaItemProps";
import { getDomain } from "../../util/Urls";

export const TextItem = (props: MediaItemProps) => {
  const { media, ...rest } = props;
  const text = media.content;
  return (
    <Panel flexDirection="column" m="md" p={0} {...rest}>
      <Text as="p" kind={"large"} m={0}>
        {text}
      </Text>
    </Panel>
  );
};
