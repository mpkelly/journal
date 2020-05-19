import React, { useState, useCallback, useEffect } from "react";
import { Column, Row, FlexProps } from "@mpkelly/siam";
import { Media, MediaType } from "./MediaDatabase";
import { Show } from "../util/Show";
import { NotFound } from "./NotFound";
import { ImageItem } from "./ImageItem";
import { VideoItem } from "./VideoItem";
import { TextItem } from "./TextItem";
import { useMedia } from "./MediaContext";
import { isHotkey } from "@mpkelly/react-editor-kit";

export const MediaGrid = () => {
  const { media, groups: items, mediaIcon, type } = useMedia();
  const noMedia = items.length === 0 || items[0].length === 0;
  const [showing, setShowing] = useState<Media>();
  const [selected, setSelected] = useState<Media>(media[0]);

  const next = useCallback(() => {
    let index = media.indexOf(selected);
    if (index + 1 >= media.length) {
      index = 0;
    } else {
      index++;
    }
    const active = media[index];
    setSelected(active);
    if (showing) {
      setShowing(active);
    }
  }, [media, showing, selected]);

  const previous = useCallback(() => {
    let index = media.indexOf(selected);
    if (index - 1 < 0) {
      index = media.length - 1;
    } else {
      index--;
    }
    const active = media[index];
    setSelected(active);
    if (showing) {
      setShowing(active);
    }
  }, [media, showing, selected]);

  useEffect(() => {
    if (!selected) {
      setSelected(media[0]);
    }
  }, [selected, media]);

  useEffect(() => {
    const handleKey = (event: KeyboardEvent) => {
      if (isHotkey("ArrowRight")(event)) {
        next();
      }
      if (isHotkey("ArrowLeft")(event)) {
        previous();
      }
      if (isHotkey("space")(event)) {
        event.preventDefault();
        setShowing(selected);
      }
      if (isHotkey("escape")(event)) {
        setShowing(undefined);
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [showing, selected, next]);

  const togglePreview = (showing?: Media) => {
    if (showing) {
      setSelected(showing);
    }
    setShowing(showing);
  };

  const renderMediaItem = useCallback(
    (media: Media): JSX.Element => {
      const isSelected = Boolean(selected && media.id === selected.id);
      const isShowing = Boolean(showing && media.id === showing.id);
      switch (media.type) {
        case MediaType.Image:
          return (
            <ImageItem
              media={media}
              selected={isSelected}
              showPreview={isShowing}
              onClick={() => togglePreview(media)}
              onPreviewBackgroundClick={togglePreview}
            />
          );
        case MediaType.Video:
          return (
            <VideoItem
              media={media}
              selected={isSelected}
              showPreview={isShowing}
              onClick={() => togglePreview(media)}
              onPreviewBackgroundClick={togglePreview}
            />
          );
        case MediaType.Text:
          return (
            <TextItem
              media={media}
              selected={isSelected}
              showPreview={isShowing}
              onClick={() => togglePreview(media)}
              onPreviewBackgroundClick={togglePreview}
            />
          );
      }
      throw Error("Unhandled media type " + media.type);
    },
    [showing, selected]
  );

  const createGroups = (items: Media[][]) => {
    const groups: (JSX.Element | null)[][] = [];
    items.forEach((items: Media[]) => {
      groups.push(items.map(renderMediaItem));
    });
    return groups;
  };

  const groups = createGroups(items);

  return (
    <Row
      flexGrow={1}
      height={"100%"}
      maxWidth="100%"
      overflowX="hidden"
      overflowY="auto"
      key={type}
    >
      <Show when={noMedia}>
        <NotFound icon={mediaIcon} labelKey="noMediaFound" />
      </Show>
      <Show when={!noMedia}>
        {groups.map((group: any, index: number) => {
          const props: FlexProps = {};
          if (index < groups.length - 1) {
            props.mr = "md";
          }
          return (
            <Column
              id="media-group"
              flex={1}
              width="33%"
              flexShrink={0}
              key={index}
              {...props}
            >
              {group}
            </Column>
          );
        })}
      </Show>
    </Row>
  );
};
