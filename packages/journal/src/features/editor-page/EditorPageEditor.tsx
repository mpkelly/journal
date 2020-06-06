import React, { ReactNode, useMemo } from "react";
import { FlexProps, Row, useSiam, System } from "@mpkelly/siam";
import { useEditorState } from "./EditorPageState";
import { EditorToolbar } from "../editor/EditorToolbar";
import {
  EditorKit,
  Editor,
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
  ImagePlugin,
  TextAlignPlugin,
  createClearFormattingPlugin,
  LayoutPlugin,
  Plugin,
  createInitialLetterPlugin,
} from "@mpkelly/react-editor-kit";
import { EditorContainer } from "./EditorContainer";
import { ErrorBoundary } from "../errors/ErrorHandler";
import { createEditorStylePlugin } from "./EditorPageStylePlugin";
import { FormatContextMenuPlugin } from "../editor/EditorFormatContextMenuPlugin";
import { InsertContextMenuPlugin } from "../editor/EditorInsertContextMenuPlugin";

export interface EditorPageEditorProps extends FlexProps {
  children: ReactNode;
}

export const EditorPageEditor = (props: EditorPageEditorProps) => {
  const { children } = props;
  const {
    saved,
    value,
    instantSave,
    handleToggleLocked,
    handleChange,
    readOnly,
    handleRestorePreviousValue,
  } = useEditorState();
  const { system } = useSiam();
  const plugins = useMemo(() => createPlugins(system), []);
  return (
    <EditorKit plugins={plugins} readOnly={readOnly} id="documenteditor">
      <EditorToolbar
        readOnly={readOnly}
        saved={saved}
        onSave={instantSave}
        onToggleLocked={handleToggleLocked}
      />
      <Row flexGrow={1} height="calc(100vh - 60px)">
        <EditorContainer
          flexDirection="column"
          overflow={"hidden"}
          backgroundColor="background"
          flexGrow={1}
          flexShrink={1}
          flexBasis={0}
          id="editor"
        >
          <ErrorBoundary handleGoBack={handleRestorePreviousValue}>
            <Editor value={value} onChange={handleChange} />
          </ErrorBoundary>
        </EditorContainer>
        {children}
      </Row>
    </EditorKit>
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
  EditorToolbarPlugin,
  ImagePlugin,
  TextAlignPlugin,
  DividerPlugin,
  createClearFormattingPlugin(),
  LayoutPlugin,
  // createInitialLetterPlugin(),
  // FormatContextMenuPlugin,
  // InsertContextMenuPlugin,
];
