import constate from "constate";
import { useEditorState as editorState } from "../editor/EditorState";
import { useCodeEditorState as codeEditorState } from "../code-editor/CodeEditorState";
import { useEditorSideTabState as editorSideTabState } from "./EditorSideTabState";

export const [EditorStateProvider, useEditorState] = constate(editorState);
export const [EditorSideTabStateProvider, useEditorSideTabState] = constate(
  editorSideTabState
);
export const [CodeEditorStateProvider, useCodeEditorState] = constate(
  codeEditorState
);
