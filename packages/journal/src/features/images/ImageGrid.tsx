import React, { useState, useCallback, useEffect } from "react";
import { isHotkey } from "@mpkelly/react-editor-kit";
import { Row } from "@mpkelly/siam";
import { Media, MediaType } from "../media/Media";
import { Show } from "../../util/Show";
import { NotFound } from "../media/NotFound";
import { Grid } from "../../components/grid/Grid";
import { ImageTile } from "./ImageTile";
import { useImageGridState } from "./ImageGridState";

export interface ImageGridProps {
  images: Media[];
}

export const ImageGrid = (props: ImageGridProps) => {
  const {
    selected,
    setSelected,
    setShowing,
    showing,
    images,
  } = useImageGridState(props);
  const noMedia = images.length === 0;

  const togglePreview = (showing?: Media) => {
    if (showing) {
      setSelected(showing);
    }
    setShowing(showing);
  };

  const renderMediaItem = useCallback(
    (image: Media): JSX.Element => {
      const isSelected = Boolean(selected && image.id === selected.id);
      const isShowing = Boolean(showing && image.id === showing.id);
      switch (image.type) {
        case MediaType.Image:
          return (
            <ImageTile
              image={image}
              selected={isSelected}
              showPreview={isShowing}
              onClick={() => togglePreview(image)}
              onClose={togglePreview}
            />
          );
      }
      throw Error("Unhandled images type " + image.type);
    },
    [showing, selected]
  );

  return (
    <Row
      flexGrow={1}
      height={"100%"}
      maxWidth="100%"
      overflowX="hidden"
      overflowY="auto"
      gravity="top-start"
      flexWrap={"wrap"}
    >
      <Show when={noMedia}>
        <NotFound icon={"image"} labelKey="noMediaFound" />
      </Show>
      <Show when={!noMedia}>
        <Grid columnCount={3}>
          {images.map((images) => renderMediaItem(images))}
        </Grid>
      </Show>
    </Row>
  );
};
