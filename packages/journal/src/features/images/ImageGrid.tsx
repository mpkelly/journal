import React, { useState, useCallback, useEffect } from "react";
import { isHotkey } from "@mpkelly/react-editor-kit";
import { Row } from "@mpkelly/siam";
import { Media, MediaType } from "../media/Media";
import { Show } from "../../util/Show";
import { NotFound } from "../media/NotFound";
import { Grid } from "../../components/grid/Grid";
import { ImageTile } from "./ImageTile";

export interface ImageGridProps {
  images: Media[];
}

export const ImageGrid = (props: ImageGridProps) => {
  const { images } = props;
  const [showing, setShowing] = useState<Media>();
  const [selected, setSelected] = useState<Media>(images[0]);

  const noMedia = images.length === 0;

  const next = useCallback(() => {
    let index = images.indexOf(selected);
    if (index + 1 >= images.length) {
      index = 0;
    } else {
      index++;
    }
    const active = images[index];
    setSelected(active);
    if (showing) {
      setShowing(active);
    }
  }, [images, showing, selected]);

  const previous = useCallback(() => {
    let index = images.indexOf(selected);
    if (index - 1 < 0) {
      index = images.length - 1;
    } else {
      index--;
    }
    const active = images[index];
    setSelected(active);
    if (showing) {
      setShowing(active);
    }
  }, [images, showing, selected]);

  useEffect(() => {
    if (!selected) {
      setSelected(images[0]);
    }
  }, [selected, images]);

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
              onDelete={console.log}
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
