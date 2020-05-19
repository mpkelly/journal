import React from "react";
import {
  Plugin,
  MenuItem,
  TableMenuItem,
  CodeMenuItem,
  HeadingMenuItem,
  BlockquoteMenuItem,
  LayoutMenuItem,
  CustomLayoutMenuItem,
} from "@mpkelly/react-editor-kit";

export const InsertContextMenuPlugin: Plugin = {
  name: "insert-context-menu",
  onContextMenu: [
    {
      //No trigger - always allowed
      items: [
        <MenuItem text={"Insert"}>
          <MenuItem text="Headings">
            <HeadingMenuItem type="h1" text="Heading 1" rightText=":h1 " />
            <HeadingMenuItem type="h2" text="Heading 2" rightText=":h2 " />
            <HeadingMenuItem type="h3" text="Heading 3" rightText=":h3 " />
            <HeadingMenuItem type="h4" text="Heading 4" rightText=":h4 " />
            <HeadingMenuItem type="h5" text="Heading 5" rightText=":h5 " />
            <HeadingMenuItem type="h6" text="Heading 6" rightText=":h6 " />
          </MenuItem>
          <div className="rek-h-divider" />
          <BlockquoteMenuItem text="Blockquote" />
          <CodeMenuItem text="Code Block" />
          <TableMenuItem text="Table" />
          <div className="rek-h-divider" />
        </MenuItem>,
      ],
    },
  ],
};
