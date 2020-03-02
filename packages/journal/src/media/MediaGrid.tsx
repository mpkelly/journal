import React from "react";
import { Column, styled, Row, FlexProps } from "udx-react";
import { Media, MediaType } from "./MediaDatabase";
import { Show } from "../util/Show";
import { NotFound } from "./NotFound";
import { ImageItem } from "./ImageItem";
import { VideoItem } from "./VideoItem";
import { TextItem } from "./TextItem";
import { Panel } from "../panel/Panel";
import { ItemInfo } from "./ItemInfo";
import { useMedia } from "./MediaContext";

export const MediaGrid = () => {
  const { items, mediaIcon, type } = useMedia();
  const noMedia = items.length === 0 || items[0].length === 0;
  const groups = createGroups(items);
  return (
    <Row flexGrow={1} height={"100%"} overflowY="auto" key={type}>
      <Show when={noMedia}>
        <NotFound icon={mediaIcon} labelKey="noMediaFound" />
      </Show>
      {groups.map((group: any, index: number) => {
        const props: FlexProps = {};
        if (index < groups.length - 1) {
          props.mr = "md";
        }
        return (
          <Column flex={1} flexShrink={0} key={index} {...props}>
            {group}
          </Column>
        );
      })}
    </Row>
  );
};

const createGroups = (items: Media[][]) => {
  const groups: (JSX.Element | null)[][] = [];
  items.forEach((items: Media[]) => {
    groups.push(items.map(renderMediaItem));
  });
  return groups;
};

export const renderMediaItem = (media: Media): JSX.Element | null => {
  let body: JSX.Element;
  switch (media.type) {
    case MediaType.Image:
      body = <ImageItem media={media} />;
      break;
    case MediaType.Video:
      body = <VideoItem media={media} />;
      break;
    case MediaType.Text:
      body = <TextItem media={media} />;
      break;
    default:
      return null;
  }

  return (
    <ItemWrapper
      key={media.id}
      boxShadow={0}
      mb="md"
      backgroundColor="content_background"
    >
      {body}
      <ItemInfo
        media={media}
        borderRadius="sm"
        p={0}
        mt={"md"}
        width={"calc(100% - 16px)"}
        height={"auto"}
      />
    </ItemWrapper>
  );
};

const ItemWrapper = styled(Panel)`
  flex-direction: column;
  align-items: center;
`;
