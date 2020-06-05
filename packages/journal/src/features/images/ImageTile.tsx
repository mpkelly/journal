import React, { Fragment } from "react";
import scrollIntoView from "scroll-into-view-if-needed";
import { Show } from "../../util/Show";
import { GridImage } from "../../components/grid/GridImage";
import { FlexProps } from "@mpkelly/siam";
import { Media } from "../media/Media";
import { ImagePreview } from "./ImagePreview";

export interface ImageTileProps extends FlexProps {
  image: Media;
  onClose(): void;
  showPreview: boolean;
}

export const ImageTile = (props: ImageTileProps) => {
  const { image, onClick, showPreview, selected, onClose, ...rest } = props;

  const source = getImageSource(image);

  const handleRef = (node?: HTMLElement) => {
    if (node && selected) {
      scrollIntoView(node, {
        behavior: "smooth",
        scrollMode: "if-needed",
        block: "nearest",
        inline: "start",
      });
    }
  };

  return (
    <Fragment>
      <GridImage
        onClick={onClick}
        src={source}
        ref={handleRef}
        selected={selected}
        border="3px solid transparent"
        selectedBorderColor="orange"
        {...rest}
      />
      <Show when={showPreview}>
        <ImagePreview image={image} onClose={onClose} />
      </Show>
    </Fragment>
  );
};

export const getImageSource = (image: Media) => {
  return image.content
    ? `data:image/png;base64,${image.content}`
    : image.source;
};
