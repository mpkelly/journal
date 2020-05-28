import React from "react";
import { Icon, FlexProps, Row, styled, getStyles } from "@mpkelly/siam";
import { stopEvent } from "@mpkelly/react-editor-kit";
import useBoolean from "react-hanger/useBoolean";
import { Media } from "../media/Media";
import { getImageSource } from "./ImageTile";
import { Overlay } from "../../components/dialog/Overlay";
import { ImageProperties } from "./ImageProperties";

import { Show } from "../../util/Show";
import { useImagePageState } from "../image-page/ImagePageState";
import { useSettings } from "../settings/SettingsContext";

export interface ImagePreviewProps extends FlexProps {
  onClose(): void;
  image: Media;
}

export const ImagePreview = (props: ImagePreviewProps) => {
  const { image, onClose } = props;
  const { handleChange, handleDelete } = useImagePageState();
  const source = getImageSource(image);
  const { settings, handleSettingsChange } = useSettings();

  const handleToggleShow = () => {
    handleSettingsChange({
      showImageProperties: !settings.showImageProperties,
    });
  };

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
            <Icon
              name="delete"
              kind="button"
              ml="auto"
              onClick={() => {
                handleDelete(image);
                onClose();
              }}
            />
            <Icon
              name="edit"
              kind="button"
              ml="lg"
              selected={settings.showImageProperties}
              selectedColor="accent"
              onClick={handleToggleShow}
            />
          </Row>
          <Image
            src={source}
            onClick={stopEvent}
            onContextMenu={stopEvent}
            boxShadow="sm"
          />
        </Row>
        <Show when={settings.showImageProperties}>
          <ImageProperties
            p="lg"
            width={280}
            height="100%"
            onClick={stopEvent}
            onContextMenu={stopEvent}
            borderLeft="1px solid dividers"
            image={image}
            onChange={handleChange}
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
