import React from "react";
import { Row, Text as _Text } from "@mpkelly/siam";
import ReactPlayer from "react-player";
import { MediaItemProps } from "./MediaItemProps";

const Player = ReactPlayer as any;

export const VideoItem = (props: MediaItemProps) => {
  const { media, ...rest } = props;
  const source = media.source;
  return (
    <Row
      m="md"
      alignItems="center"
      justifyContent="center"
      backgroundColor="muted.L50"
      {...rest}
    >
      <Player url={source} width={"100%"} height={350} controls />
    </Row>
  );
};
