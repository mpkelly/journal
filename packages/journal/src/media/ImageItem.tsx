import React, { useState, Fragment } from "react";
import { MediaItemProps } from "./MediaItemProps";
import { Row, styled } from "udx-react";
import { Show } from "../util/Show";
import { Overlay } from "../util/Overlay";
import { stop } from "../util/Events";

export const ImageItem = (props: MediaItemProps) => {
  const { media, onClick, ...rest } = props;
  const [showPreview, setShowPreview] = useState(false);

  const togglePreview = () => {
    setShowPreview(show => !show);
  };
  const source = media.content
    ? `data:image/png;base64,${media.content}`
    : media.source;
  const handleClick = onClick || togglePreview;

  return (
    <Fragment>
      <Row
        m="md"
        alignItems="center"
        justifyContent="center"
        backgroundColor="muted.L100"
        onClick={handleClick}
        minHeight={240}
        {...rest}
      >
        <img
          width={"100%"}
          src={source}
          style={{ maxHeight: 240, objectFit: "contain" }}
        />
      </Row>
      <Show when={showPreview}>
        <Overlay
          justifyContent="center"
          alignItems="center"
          backgroundColor="brand.A800"
          onClick={togglePreview}
        >
          <Image src={source} onClick={stop} onContextMenu={stop} />
        </Overlay>
      </Show>
    </Fragment>
  );
};

const Image = styled.img`
  max-height: 80%;
  max-width: 80%;
  box-shadow: ${(props: any) => props.theme.shadows[1]};
`;
