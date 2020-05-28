import React from "react";
import { Icon, FlexProps, Row, styled, getStyles, Column } from "@mpkelly/siam";
import { stopEvent } from "@mpkelly/react-editor-kit";
import { Media } from "../media/Media";
import { getImageSource } from "./ImageTile";
import { Overlay } from "../../components/dialog/Overlay";
import { ImageProperties } from "./ImageProperties";
import useBoolean from "react-hanger/useBoolean";
import { Show } from "../../util/Show";

export interface ImagePreviewProps extends FlexProps {
  onClose(): void;
  image: Media;
}

export const ImagePreview = (props: ImagePreviewProps) => {
  const { image, onClose } = props;
  const source = getImageSource(image);
  const edit = useBoolean(false);
  return (
    <Overlay backgroundColor="background" onClick={onClose}>
      <Row size="100%">
        <Row
          flexGrow={1}
          justifyContent="center"
          alignItems="center"
          position="relative"
        >
          <Row
            gravity="center-start"
            position="absolute"
            left={16}
            right={16}
            top={12}
            onClick={stopEvent}
          >
            <Icon name="clear" kind="button" onClick={onClose} />
            <Icon name="delete" kind="button" ml="auto" />
            <Icon name="edit" kind="button" ml="lg" onClick={edit.toggle} />
          </Row>
          <Image
            src={source}
            onClick={stopEvent}
            onContextMenu={stopEvent}
            boxShadow="sm"
          />
        </Row>
        <Show when={edit.value}>
          <ImageProperties
            image={image}
            height="100%"
            p="lg"
            onClick={stopEvent}
            onContextMenu={stopEvent}
            width={280}
            borderLeft="1px solid dividers"
          />
        </Show>
      </Row>
    </Overlay>
  );
};

export const Image = styled.img<FlexProps>`
  max-height: 80%;
  max-width: 80%;
  ${getStyles}
`;
