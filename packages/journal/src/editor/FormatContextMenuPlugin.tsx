import React from "react";
import {
  Plugin,
  MenuItem,
  BoldMenuItem,
  ItalicMenuItem,
  UnderlineMenuItem,
  StrikethroughMenuItem,
  SubscriptMenuItem,
  SuperscriptMenuItem,
  ClearFormattingMenuItem,
} from "@mpkelly/react-editor-kit";

export const FormatContextMenuPlugin: Plugin = {
  name: "format-context-menu",
  onContextMenu: [
    {
      //No trigger - always allowed
      items: [
        <MenuItem text={"Format"}>
          <BoldMenuItem text="Bold" rightText="⌘+B" />
          <ItalicMenuItem text="Italic" rightText="⌘+I" />
          <UnderlineMenuItem text="Underline" rightText="⌘+U" />
          <StrikethroughMenuItem text="Strikethrough" rightText="⌘+T" />
          <SubscriptMenuItem text="Subscript" />
          <SuperscriptMenuItem text="Superscript" />
          <ClearFormattingMenuItem text="Clear formatting" />
        </MenuItem>,
      ],
    },
  ],
};
