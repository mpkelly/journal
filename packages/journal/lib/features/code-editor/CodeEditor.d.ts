import React, { ReactNode } from "react";
import { FlexProps } from "@mpkelly/siam";
import { Node } from "@mpkelly/react-editor-kit";
import { CodeFile } from "./CodeFile";
export interface CodeEditorProps extends FlexProps {
    codeFile?: CodeFile;
    onChange(node: Node[]): void;
    children?: ReactNode;
}
export declare const CodeEditor: React.MemoExoticComponent<(props: CodeEditorProps) => JSX.Element>;
