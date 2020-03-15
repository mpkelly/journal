import React from "react";
import { Article, Column } from "udx-react";
import { Page } from "../page/Page";
import { Editor } from "./Editor";
import { RouteComponentProps } from "react-router";
import { Show } from "../util/Show";
import { Toolbar } from "./Toolbar";
import { Item } from "../content/Item";
import { EditorStylePlugin } from "./EditorStylePlugin";

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
  QuotePlugin,
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
  CodeHighlighterPlugin,
  EnterKeyHandler,
  StylePlugin,
  createBreakoutPlugin,
  DividerPlugin,
  HistoryPlugin,
  ConstraintsPlugin,
  SelectionToolbarPlugin,
  EditorToolbarPlugin,
  Plugin,
  ImagePlugin,
  TextAlignPlugin
} from "@mpkelly/react-editor-kit";
import { FloatingToolbar } from "./FloatingToolbar";
import { ErrorBoundary } from "../errors/ErrorHandler";

export interface EditorPageProps extends RouteComponentProps<RouteParams> {}

export interface RouteParams {
  collectionId: string;
  itemId: string;
}

export const EditorPage = (props: EditorPageProps) => {
  const {
    itemId,
    collectionId,
    item,
    saved,
    value,
    instantSave,
    handleToggleLocked,
    handleItemChange,
    readOnly,
    handleRestorePreviousValue
  } = useEditor(props);
  return (
    <Page>
      <Column
        width="100%"
        height={"100%"}
        backgroundColor="content_background"
        overflow="hidden"
        key={itemId}
      >
        <Show when={Boolean(itemId)}>
          <EditorKit plugins={plugins}>
            <Show when={Boolean(item)}>
              <Toolbar
                item={item as Item}
                saved={saved}
                collectionId={Number(collectionId)}
                onSave={instantSave}
                onToggleLocked={handleToggleLocked}
              />
            </Show>
            <Article
              flexDirection="column"
              flexGrow={1}
              overflowY={"hidden"}
              alignItems={"center"}
            >
              <Show when={!readOnly}>
                <FloatingToolbar />
              </Show>
              <ErrorBoundary handleGoBack={handleRestorePreviousValue}>
                <Editor
                  value={value}
                  onChange={handleItemChange}
                  readOnly={readOnly}
                />
              </ErrorBoundary>
            </Article>
          </EditorKit>
        </Show>
      </Column>
    </Page>
  );
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
  QuotePlugin,
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
  CodeHighlighterPlugin,
  EnterKeyHandler,
  StylePlugin,
  CodeHighlighterPlugin,
  createBreakoutPlugin(),
  DividerPlugin,
  HistoryPlugin,
  ConstraintsPlugin,
  SelectionToolbarPlugin,
  EditorToolbarPlugin,
  EditorStylePlugin,
  ImagePlugin,
  TextAlignPlugin,
  DividerPlugin
];
