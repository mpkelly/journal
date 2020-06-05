import React, { useCallback, useEffect } from "react";
import { Row } from "@mpkelly/siam";
import { Media, MediaType } from "../media/Media";
import { EmptyView } from "../media/EmptyView";
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

  if (images.length === 0) {
    return <EmptyView icon={"images"} labelKey="noImagesFound" mt="xxl" />;
  }

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
      <Grid columnCount={3}>
        {images.map((images) => renderMediaItem(images))}
      </Grid>
    </Row>
  );
};
