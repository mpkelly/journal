import React, { Fragment } from "react";
import { Page } from "../page/Page";
import { Show } from "@mpkelly/siam";
import { ImagePageStateProvider, useImagePageState } from "./ImagePageState";
import { ImagePageHeader } from "./ImagePageHeader";
import { ImageGrid } from "../images/ImageGrid";
import { ImageAddDialog } from "../images/ImageAddDialog";
import { Dropzone } from "../../components/dropzone/Dropzone";

export const ImagePage = () => {
  return (
    <ImagePageStateProvider>
      <ImagePageContent />
    </ImagePageStateProvider>
  );
};

export const ImagePageContent = () => {
  const {
    images,
    newImages,
    handleFiles,
    handleAddMedia,
  } = useImagePageState();
  return (
    <Fragment>
      <Page p="lg" flexGrow={1} overflowY={"hidden"}>
        <ImagePageHeader />
        {/* <JournalHelp /> */}
        <Dropzone
          flexGrow={1}
          overflowY={"hidden"}
          handleFiles={handleFiles}
          data-image-dropzone
        >
          <ImageGrid images={images} />
        </Dropzone>
      </Page>
      <Show when={Boolean(newImages.length)}>
        <ImageAddDialog images={newImages} onConfirm={handleAddMedia} />
      </Show>
    </Fragment>
  );
};
