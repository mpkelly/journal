import React from "react";
import { FlexProps } from "@mpkelly/siam";
import {
  Divider,
  EditorToolbar,
  HeadingToggleButton,
  ImageButton,
  UploadImageMenuItem,
  InsertImageByUrlMenuItem,
  TextAlignLeftButton,
  TextAlignCenterButton,
  TextAlignRightButton,
  OrderedListButton,
  UnorderedListButton,
  BlockquoteButton,
  TableButton,
  VideoButton,
} from "@mpkelly/react-editor-kit";

export interface ToolbarProps extends FlexProps {}

export const Toolbar = (props: ToolbarProps) => {
  return (
    <EditorToolbar className="rek-element-toolbar ">
      <HeadingToggleButton
        className="material-icons-round"
        ligature="format_size"
        heading={"h3"}
      />
      <Divider />
      <ImageButton className="material-icons-round" ligature="insert_photo">
        <UploadImageMenuItem
          icon={{
            className: "material-icons-round",
            ligature: "publish",
          }}
          text={"Upload image"}
        />
        <InsertImageByUrlMenuItem
          icon={{
            className: "material-icons-round",
            ligature: "link",
          }}
          text={"Insert by URL"}
        />
      </ImageButton>
      <Divider />
      <TextAlignLeftButton
        className="material-icons-round"
        ligature="format_align_left"
      />
      <TextAlignCenterButton
        className="material-icons-round"
        ligature="format_align_center"
      />
      <TextAlignRightButton
        className="material-icons-round"
        ligature="format_align_right"
      />
      <Divider />
      <OrderedListButton
        className="material-icons-round"
        ligature="format_list_numbered"
      />
      <UnorderedListButton
        className="material-icons-round"
        ligature="format_list_bulleted"
      />
      <Divider />

      <BlockquoteButton
        className="material-icons-round"
        ligature="format_quote"
      />
      <Divider />
      <TableButton className="material-icons-round" ligature="border_all" />
      <VideoButton className="material-icons-round" ligature="videocam" />
    </EditorToolbar>
  );
};
