import React from "react";
import { Text, IconBundle, ElementProps, IconProps } from "@mpkelly/siam";

const className = "material-icons";

export const Icons: IconBundle = {
  "folder-open": {
    ligature: "arrow_drop_down",
    className,
  },
  "folder-closed": {
    ligature: "arrow_drop_down",
    rotate: -90,
    className,
  },
  collection: {
    ligature: "account_balance_wallet",
    className,
  },
  add: {
    ligature: "add",
    className,
  },
  folder: {
    ligature: "folder_open",
    className,
  },
  document: {
    ligature: "description",
    className,
  },
  wikipage: {
    ligature: "ballot",
    className,
  },
  delete: {
    ligature: "delete",
    className,
  },
  upload: {
    ligature: "cloud_upload",
    className,
  },
  color: {
    ligature: "pallete",
    className,
  },
  settings: {
    ligature: "settings",
    className,
  },
  images: {
    ligature: "collections",
    className,
  },
  videos: {
    ligature: "video_library",
    className,
  },
  text: {
    ligature: "title",
    className,
  },
  export: {
    ligature: "launch",
    className,
  },
  clear: {
    ligature: "clear",
    className,
  },
  refresh: {
    ligature: "refresh",
    className,
  },
  tags: {
    ligature: "label",
    className,
  },
  print: {
    ligature: "print",
    className,
  },
  save: {
    ligature: "save",
    className,
  },
  more: {
    ligature: "more_vert",
    className,
  },
  previous: {
    ligature: "navigate_before",
    className,
  },
  next: {
    ligature: "navigate_next",
    className,
  },
  library: {
    ligature: "library_books",
    className,
  },
  template: {
    ligature: "post_add",
    className,
  },
  confirm: {
    ligature: "info",
    className,
  },
  menu: {
    ligature: "menu",
    className,
  },
  code: {
    ligature: "code",
    className,
  },
  execute: {
    ligature: "play_arrow",
    className,
  },
  style: {
    ligature: "style",
    className,
  },
  function: {
    ligature: "functions",
    className,
  },
  help: {
    ligature: "help_outline",
    className,
  },
  snippets: {
    ligature: "view_quilt",
    className,
  },
  outline: {
    ligature: "list",
    className,
  },
  variable: {
    component: (props: IconProps) => (
      <Text
        style={{
          fontFamily: "monospace",
          fontWeight: 700,
          transform: "scale(.8,1)",
          fontSize: 20,
        }}
        {...props}
      >
        &#123;x&#125;
      </Text>
    ),
  },
  edit: {
    ligature: "create",
    className,
  },
  info: {
    ligature: "info",
    className,
  },
};
