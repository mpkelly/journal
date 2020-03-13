import React from "react";

import {
  Divider,
  BoldButton,
  ItalicButton,
  TextAlignLeftButton,
  TextAlignCenterButton,
  TextAlignRightButton,
  TextAlignJustifiedButton,
  SelectionToolbar
} from "@mpkelly/react-editor-kit";

export const FloatingToolbar = () => {
  return (
    <SelectionToolbar delay={200}>
      <BoldButton className="material-icons-outlined" ligature="format_bold" />
      <ItalicButton
        className="material-icons-outlined"
        ligature="format_italic"
      />
      <Divider />
      <TextAlignLeftButton
        className="material-icons-outlined"
        ligature="format_align_left"
      />
      <TextAlignCenterButton
        className="material-icons-outlined"
        ligature="format_align_center"
      />
      <TextAlignRightButton
        className="material-icons-outlined"
        ligature="format_align_right"
      />
      <TextAlignJustifiedButton
        className="material-icons-outlined"
        ligature="format_align_justify"
      />
    </SelectionToolbar>
  );
};
