import React, { useState, MouseEvent, memo } from "react";
import { Row, Text, FlexProps, Column } from "udx-react";
import { Media } from "./MediaDatabase";
import { getDomain } from "../util/Urls";
import { ViewExternalIcon, DeleteIcon, TagIcon } from "../icons/IconNames";
import { IconButton } from "../icons/IconButton";
import { useMedia } from "./MediaContext";
import { Show } from "../util/Show";
import { TagPicker } from "../tags/TagPicker";

export interface ItemInfoProps extends FlexProps {
  media: Media;
}

export const ItemInfo = memo((props: ItemInfoProps) => {
  const { media: initialMedia, ...rest } = props;
  const [showTags, setShowTags] = useState(false);
  const { handleDelete, handleUpdate } = useMedia();
  const [media, setMedia] = useState(initialMedia);
  const domain = media.pageSource ? getDomain(media.pageSource) : undefined;

  const handleViewUrl = () => {
    window.open(media.pageSource, "_blank");
  };

  const handleToggleShowTags = (event: MouseEvent<any>) => {
    setShowTags(showTags => !showTags);
  };

  const handleTagsChange = (tags: number[]) => {
    const next = { ...media };
    next.tags = tags;
    handleUpdate(next);
    setMedia(next);
  };

  return (
    <Column p="md" position="relative" {...rest}>
      <Row alignItems="center" height={48}>
        <Show when={domain}>
          <Text>{domain}</Text>
        </Show>
        <IconButton
          name={DeleteIcon}
          buttonProps={{ ml: "auto" }}
          onClick={() => handleDelete(media)}
        />
        <IconButton
          name={TagIcon}
          buttonProps={{ ml: "md" }}
          onClick={handleToggleShowTags}
          color={showTags ? "primary" : undefined}
        />
        <Show when={media.pageSource}>
          <IconButton
            name={ViewExternalIcon}
            buttonProps={{ ml: "md" }}
            onClick={handleViewUrl}
          />
        </Show>
      </Row>
      <Show when={showTags}>
        <TagPicker
          position="absolute"
          bottom={60}
          maxHeight={250}
          overflowY={"auto"}
          backgroundColor={"content_background"}
          onTagsChange={handleTagsChange}
          selectedTags={media.tags}
        ></TagPicker>
      </Show>
    </Column>
  );
});
