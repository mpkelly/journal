import React, { Fragment } from "react";
import scrollIntoView from "scroll-into-view-if-needed";
import { Row, styled, getStyles, ElementProps } from "@mpkelly/siam";
import { MediaItemProps } from "./MediaItemProps";
import { Show } from "../util/Show";
import { Overlay } from "../util/Overlay";
import { stop } from "../util/Events";

export const ImageItem = (props: MediaItemProps) => {
  const {
    media,
    onClick,
    showPreview,
    selected,
    onPreviewBackgroundClick,
    ...rest
  } = props;

  const source = media.content
    ? `data:image/png;base64,${media.content}`
    : media.source;

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
      <Row p="md" ref={handleRef} flexShrink={0}>
        <Thumbnail
          width={"100%"}
          onClick={onClick}
          src={source}
          maxHeight={240}
          objectFit={"contain"}
          border="2px solid transparent"
          selectedBorder="2px solid accent"
          selected={selected}
          p={2}
          {...rest}
        />
      </Row>
      <Show when={showPreview}>
        <Overlay
          justifyContent="center"
          alignItems="center"
          backgroundColor="background-alpha50"
          onClick={onPreviewBackgroundClick}
        >
          <Image src={source} onClick={stop} onContextMenu={stop} />
        </Overlay>
      </Show>
    </Fragment>
  );
};

const Thumbnail = styled.img<ElementProps<any>>`
  ${(props) => getStyles(props)}
`;

const Image = styled.img`
  max-height: 80%;
  max-width: 80%;
  box-shadow: ${(props: any) => props.theme.shadows[1]};
`;
