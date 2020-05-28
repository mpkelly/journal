import React, { Fragment } from "react";
import { Page } from "../page/Page";
import { Row, Show } from "@mpkelly/siam";
import { ImagePageStateProvider, useImagePageState } from "./ImagePageState";
import { ImagePageToolbar } from "./ImagePageToolbar";
import { ImageGrid } from "../images/ImageGrid";
import { AddImageDialog } from "../images/AddImageDialog";

export const ImagePage = () => {
  return (
    <ImagePageStateProvider>
      <ImagePageContent />
    </ImagePageStateProvider>
  );
};

export const ImagePageContent = () => {
  const { images, newImages, handleAddMedia } = useImagePageState();
  return (
    <Fragment>
      <Page p="lg" flexGrow={1} overflowY={"hidden"}>
        <ImagePageToolbar />
        <Row flexGrow={1} overflowY={"hidden"}>
          <ImageGrid images={images} />
        </Row>
      </Page>
      <Show when={Boolean(newImages.length)}>
        <AddImageDialog images={newImages} onConfirm={handleAddMedia} />
      </Show>
    </Fragment>
  );
};
