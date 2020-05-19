/**
 Something like Dropbox Paper
**/

import * as React from "react";
import { useMemo } from "react";
import {
  Editor,
  EditorKit,
  Plugin,
  BoldPlugin,
  ItalicPlugin,
  BoldButton,
  ItalicButton,
  UnderlineButton,
  StrikethroughButton,
  UnderlinePlugin,
  StrikethroughPlugin,
  SelectionToolbar,
  createTodoListPlugin,
  H3Plugin,
  OrderedListPlugin,
  UnorderedListPlugin,
  DividerPlugin,
  LinkPlugin,
  LinkButton,
  ReadOnlyButton,
  HeadingTogglePlugin,
  TablePlugin,
  BlockquotePlugin,
  createConstrainsPlugin,
  createBreakoutPlugin,
  VideoPlugin,
  TextAlignPlugin,
  ImagePlugin,
  IconButton,
  createFixedTitlePlugin,
  Resizable,
} from "@mpkelly/react-editor-kit";
import { WikiEditorStylePlugin } from "./WikiEditorStylePlugin";
import { WikiEditorConstraints } from "./WikiEditorConstraint";
import { System } from "@mpkelly/siam";
import { createEditorStylePlugin } from "../editor/EditorPageStylePlugin";
import { useEditor } from "../editor/Editors";
import { ItemData } from "../content/ItemData";
import { Toolbar } from "./Toolbar";

const plugins: Plugin[] = [
  BoldPlugin,
  ItalicPlugin,
  UnderlinePlugin,
  StrikethroughPlugin,
  H3Plugin,
  OrderedListPlugin,
  UnorderedListPlugin,
  DividerPlugin,
  VideoPlugin,
  LinkPlugin,
  TablePlugin,
  BlockquotePlugin,
  UnorderedListPlugin,
  OrderedListPlugin,
  createConstrainsPlugin(WikiEditorConstraints),
  createBreakoutPlugin(),
  createFixedTitlePlugin(),
  HeadingTogglePlugin,
  TextAlignPlugin,
  ImagePlugin,
  WikiEditorStylePlugin,
];

const wrapperStyle = {
  width: "100%",
  height: "100%",
};

export interface WikiEditorProps {
  system: System;
  item: ItemData;
}

export const WikiEditor = (props: WikiEditorProps) => {
  const { system } = props;
  const { value, handleToggleLocked, handleItemChange } = useEditor({
    item: props.item,
    defaultValue,
  });
  const plugins = useMemo(() => createPlugins(system), []);
  return (
    <EditorKit plugins={plugins} id="wikieditor">
      <div className="paper-header">
        <div className="right">
          <ReadOnlyButton
            className="material-icons-round"
            ligature="lock_open"
            readOnlyClassName="material-icons-round"
            readOnlyLigature="lock"
            onMouseDown={handleToggleLocked}
          />
        </div>
      </div>
      <div style={wrapperStyle}>
        <SelectionToolbar>
          <BoldButton className="material-icons-round" ligature="format_bold" />
          <ItalicButton
            className="material-icons-round"
            ligature="format_italic"
          />
          <UnderlineButton
            className="material-icons-round"
            ligature="format_underlined"
          />
          <StrikethroughButton
            className="material-icons-round"
            ligature="format_strikethrough"
          />
          <LinkButton className="material-icons-round" ligature="insert_link" />
        </SelectionToolbar>
        <Resizable
          initialWidth={800}
          onChange={console.log}
          style={{ margin: 0 }}
        >
          <Editor value={value} onChange={handleItemChange} />
        </Resizable>
        <Toolbar />
      </div>
    </EditorKit>
  );
};

const createPlugins = (system: System) => {
  const todoList = createTodoListPlugin(
    system.labels.todoItemPlaceholder as string
  );
  return plugins.concat([todoList, createEditorStylePlugin(system)]);
};

const defaultValue = () => {
  return [
    {
      type: "fixed-title",
      children: [{ text: "Meeting notes for Monday 1st January 2020" }],
    },
    { type: "paragraph", children: [{ text: "" }] },
  ];
};
