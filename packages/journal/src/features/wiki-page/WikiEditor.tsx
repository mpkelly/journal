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
  createFixedTitlePlugin,
  Resizable,
} from "@mpkelly/react-editor-kit";
import { WikiEditorStylePlugin } from "./WikiEditorStylePlugin";
import { WikiEditorConstraints } from "./WikiEditorConstraint";
import { System } from "@mpkelly/siam";
import { createEditorStylePlugin } from "../editor-page/EditorPageStylePlugin";
import { useEditorState } from "../editor/EditorState";
import { File } from "../file/File";
import { WikiEditorToolbar } from "./WikiEditorToolbar";
import { useSettings } from "../settings/SettingsContext";

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
  file: File;
}

export const WikiEditor = (props: WikiEditorProps) => {
  const { system } = props;
  const { value, handleToggleLocked, handleChange, readOnly } = useEditorState({
    file: props.file,
    defaultValue,
  });
  const { settings, handleSettingsChange } = useSettings();
  const plugins = useMemo(() => createPlugins(system), []);
  return (
    <EditorKit plugins={plugins} id="wikieditor" readOnly={readOnly}>
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
          initialWidth={settings.wikiPageWidth}
          onChange={(wikiPageWidth) => handleSettingsChange({ wikiPageWidth })}
        >
          <Editor value={value} onChange={handleChange} />
        </Resizable>
        <WikiEditorToolbar />
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
