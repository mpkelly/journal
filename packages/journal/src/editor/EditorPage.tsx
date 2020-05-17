import React, { Fragment, useMemo } from "react";
import { Article, Column, useSiam, System } from "@mpkelly/siam";
import { Page } from "../page/Page";
import { Editor } from "./Editor";
import { RouteComponentProps } from "react-router";
import { Show } from "../util/Show";
import { Toolbar } from "./Toolbar";
import { ItemData } from "../content/ItemData";
//TODO
//import { EditorStylePlugin } from "./EditorStylePlugin";

import { useEditor } from "./Editors";
import {
  EditorKit,
  ItalicPlugin,
  BoldPlugin,
  LinkPlugin,
  StrikethroughPlugin,
  InlineCodePlugin,
  UnderlinePlugin,
  OrderedListPlugin,
  UnorderedListPlugin,
  BlockquotePlugin,
  H1Plugin,
  H2Plugin,
  H3Plugin,
  H4Plugin,
  H5Plugin,
  H6Plugin,
  SubscriptPlugin,
  SuperscriptPlugin,
  VideoPlugin,
  TablePlugin,
  CodePlugin,
  EnterKeyPlugin,
  FontsPlugin,
  ColorPlugin,
  createBreakoutPlugin,
  DividerPlugin,
  HistoryPlugin,
  ConstraintsPlugin,
  SelectionToolbarPlugin,
  EditorToolbarPlugin,
  Plugin,
  ImagePlugin,
  TextAlignPlugin,
  createClearFormattingPlugin,
  createInitialLetterPlugin,
} from "@mpkelly/react-editor-kit";
import { ErrorBoundary } from "../errors/ErrorHandler";
import { EditorContainer } from "./EditorContainer";
import { FormatContextMenuPlugin } from "./FormatContextMenuPlugin";
import { InsertContextMenuPlugin } from "./InsertContextMenuPlugin";
import { createEditorStylePlugin } from "./EditorPageStylePlugin";

export interface EditorPageProps extends RouteComponentProps {
  item: ItemData;
}

export const EditorPage = (props: EditorPageProps) => {
  const {
    item,
    saved,
    value,
    instantSave,
    handleToggleLocked,
    handleItemChange,
    readOnly,
    handleRestorePreviousValue,
  } = useEditor(props);
  const { system } = useSiam();
  const plugins = useMemo(() => createPlugins(system), []);
  return (
    <Page p="0">
      <Column
        width="100%"
        height={"100%"}
        backgroundColor="content"
        overflow="hidden"
      >
        <EditorKit plugins={plugins} readOnly={readOnly}>
          <Toolbar
            readOnly={readOnly}
            saved={saved}
            onSave={instantSave}
            onToggleLocked={handleToggleLocked}
          />
          <EditorContainer
            flexDirection="column"
            flexGrow={1}
            overflow={"hidden"}
            alignItems={"center"}
            backgroundColor="background"
          >
            <ErrorBoundary handleGoBack={handleRestorePreviousValue}>
              <Editor value={value} onChange={handleItemChange} />
            </ErrorBoundary>
          </EditorContainer>
        </EditorKit>
      </Column>
    </Page>
  );
};

const createPlugins = (system: System) => {
  return plugins.concat(createEditorStylePlugin(system));
};

const plugins: Plugin[] = [
  ItalicPlugin,
  BoldPlugin,
  LinkPlugin,
  StrikethroughPlugin,
  InlineCodePlugin,
  UnderlinePlugin,
  OrderedListPlugin,
  UnorderedListPlugin,
  BlockquotePlugin,
  H1Plugin,
  H2Plugin,
  H3Plugin,
  H4Plugin,
  H5Plugin,
  H6Plugin,
  SubscriptPlugin,
  SuperscriptPlugin,
  OrderedListPlugin,
  UnorderedListPlugin,
  VideoPlugin,
  TablePlugin,
  CodePlugin,
  EnterKeyPlugin,
  FontsPlugin,
  ColorPlugin,
  createBreakoutPlugin(),
  DividerPlugin,
  HistoryPlugin,
  ConstraintsPlugin,
  SelectionToolbarPlugin,
  EditorToolbarPlugin,
  ImagePlugin,
  TextAlignPlugin,
  DividerPlugin,
  createClearFormattingPlugin(),
  createInitialLetterPlugin(),
  FormatContextMenuPlugin,
  InsertContextMenuPlugin,
];
